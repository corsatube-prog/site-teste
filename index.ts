import './styles.scss';

import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
const basePath =
  (import.meta.env.BASE_URL?.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL || '/'}/`);
const withBasePath = (relative: string) => `${basePath}${relative.replace(/^\//, '')}`;
// (no forced zoom behavior) kept minimal: viewer controls handle zoom normally

// Lista de panoramas existentes em public/ (descobertos manualmente)
const localPanoramaFiles = [
  'salavista1.jpg',
  'salavista2.jpg',
  'sala1.jpg',
  'sala2.jpg',
  'sala3.jpg',
  'sala4.jpg',
  'antesala.jpg',
  'banheiroantesala.jpg',  
  'corredor1.jpg',
  'corredor2.jpg',
  'corredor3.jpg',
  'quarto1.jpg',
  'quarto1vista.jpg',
  'banheiromeio.jpg',
  'quarto2.jpg',
  'quarto2vista.jpg',  
  'quarto3.jpg',
  'quarto3vista.jpg',   
  'banheiroquarto3.jpg',
  'cozinha1.jpg',
  'cozinha2.jpg',
  'cozinha3.jpg', 
  'banheiroempregada.jpg', 
  'empregadaquarto1.jpg',
  'empregadaquarto2.jpg',
];

const friendlyGalleryNames: Record<string, string> = {
  'salavista1.jpg': 'Sala - Vista 1',
  'salavista2.jpg': 'Sala  Vista 2',
  'sala1.jpg': 'Sala Ambiente 1',
  'sala2.jpg': 'Sala Ambiente 2',
  'sala3.jpg': 'Sala Ambiente 3',
  'sala4.jpg': 'Sala Ambiente 4',
  'antesala.jpg': 'Antesala',
  'banheiroantesala.jpg': 'Banheiro da Antesala',
  'corredor1.jpg': 'Corredor 1',
  'corredor2.jpg': 'Corredor 2',
  'corredor3.jpg': 'Corredor 3',
  'quarto1.jpg': 'Quarto 1',
  'quarto1vista.jpg': 'Quarto 1 - Vista',
  'banheiromeio.jpg': 'Banheiro Social',
  'quarto2.jpg': 'Quarto 2',
  'quarto2vista.jpg': 'Quarto 2 - Vista',
  'quarto3.jpg': 'Quarto 3',
  'quarto3vista.jpg': 'Quarto 3 - Vista',
  'banheiroquarto3.jpg': 'Banheiro da Suíte 3',
  'cozinha1.jpg': 'Cozinha 1',
  'cozinha2.jpg': 'Cozinha 2',
  'cozinha3.jpg': 'Cozinha 3',
  'banheiroempregada.jpg': 'Banheiro de Serviço',
  'empregadaquarto1.jpg': 'Quarto de Serviço 1',
  'empregadaquarto2.jpg': 'Quarto de Serviço 2',
};

const prettifyFilename = (file: string) => {
  const base = file.replace(/\.(jpg|png)$/i, '');
  return base
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([0-9])/gi, '$1 $2')
    .replace(/([0-9])([a-z])/gi, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// === 1. Markers por panorama ===
const markersByPanorama: Record<string, any[]> = {
  'sphere.jpg': [],
  'quarto.jpg': [],
};

// Garante que cada panorama local tenha uma entrada (mesmo vazia)
localPanoramaFiles.forEach((file) => {
  if (!markersByPanorama[file]) {
    markersByPanorama[file] = [];
  }
});


// === Gallery items generation ===
// Build gallery items from the available panoramas (markersByPanorama keys).
// Prefer local assets (in `public/`) when present, otherwise fallback to remote `baseUrl`.
const localFiles = new Set<string>([...localPanoramaFiles, 'seta.png']);
const galleryOrder: string[] = [];
const pushUnique = (file: string) => {
  if (!galleryOrder.includes(file)) {
    galleryOrder.push(file);
  }
};
localPanoramaFiles.forEach(pushUnique);
Object.keys(markersByPanorama).forEach(pushUnique);

const galleryItems = galleryOrder.map((file) => {
  const isLocal = localFiles.has(file);
  const panoramaPath = isLocal ? withBasePath(file) : baseUrl + file;
  // try to use a thumbnail with `-thumb` suffix if present locally, otherwise fall back
  const thumbLocal = withBasePath(file.replace(/\.jpg$|\.png$/i, '.jpg'));
  const thumbRemote = baseUrl + file.replace(/\.jpg$|\.png$/i, '.jpg');
  // if local thumbnail not present, fallback to panoramaPath as thumbnail
  const thumbnail = isLocal ? thumbLocal : thumbRemote;
  const displayName = friendlyGalleryNames[file] ?? prettifyFilename(file);
  return {
    id: file.replace(/\W+/g, '-'),
    name: displayName,
    panorama: panoramaPath,
    thumbnail,
  };
});

// === 2. Viewer ===
const viewer = new Viewer({
  container: 'viewer',
  panorama: withBasePath('salavista1.jpg'),
  caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
  loadingImg: baseUrl + 'loader.gif',
  touchmoveTwoFingers: false,
  defaultZoomLvl: 0,
  mousewheelCtrlKey: false,
  // show only the controls we want in the main navbar (remove download)
  navbar: ['zoom', 'gallery', 'fullscreen'],

  plugins: [
    MarkersPlugin,
    GalleryPlugin.withConfig({
      visibleOnLoad: true,
      hideOnClick: false,
      // Set a larger thumbnail size using the Size type expected by the plugin
      // Size = { width: number; height: number }
      thumbnailSize: { width: 350, height: 200 },
      items: galleryItems,
      navigationArrows: true
    } as any),
  ],
});

// getPlugin returns an abstract type; cast to any so we can call plugin-specific methods
const markersPlugin = viewer.getPlugin(MarkersPlugin) as any;
const galleryPlugin = viewer.getPlugin(GalleryPlugin) as any;

// Track whether the user clicked the gallery button so we can distinguish
// intentional toggles from automatic plugin behavior (select events).
let lastClickedGalleryButton = false;

// no saved views/zoom logic — keep viewer's native behavior for zoom and resizing

// === 3. Função para trocar panorama e aplicar markers ===
function changeScene(panoramaName: string) {
  // Determine how to build the final panorama path:
  // - absolute URL (http/https): use as-is
  // - leading slash (e.g. '/quarto.jpg'): treat as local asset served from the dev server (public/)
  // - otherwise: assume it's a filename and prefix with baseUrl (remote asset)
  let panoFile: string;
  let panoPath: string;

  if (panoramaName.startsWith('http')) {
    panoFile = panoramaName;
    panoPath = panoramaName;
  } else if (panoramaName.startsWith('/')) {
    // local public asset, keep the leading slash for the loader
    panoFile = panoramaName.replace(/^\//, '');
    panoPath = withBasePath(panoFile);
  } else {
    panoFile = panoramaName;
    panoPath = localFiles.has(panoFile) ? withBasePath(panoFile) : baseUrl + panoFile;
  }

  // Listen for the panorama-loaded event before calling setPanorama so the handler
  // is guaranteed to run for the new panorama. Remove the handler after it's called.
  const handler = () => {
    // use the filename (panoFile) to lookup markersByPanorama — panoPath is a full URL
    const markers = markersByPanorama[panoFile] || [];
    markersPlugin.setMarkers(markers);
    // Garantir que o zoom sempre volte para o nível mínimo configurado
    viewer.zoom(0);
    viewer.removeEventListener('panorama-loaded', handler);
  };

  viewer.addEventListener('panorama-loaded', handler);

  // cast options to any to avoid strict type errors from the library typings
  viewer
    .setPanorama(
      panoPath,
      {
        zoom: 0,
        transition: { duration: 1000, loader: true },
      } as any,
    )
    .catch((err: any) => {
    // fallback: remove the handler if setPanorama fails
    viewer.removeEventListener('panorama-loaded', handler);
    console.error('setPanorama error:', err);
  });
}

// === 5. Clique na galeria ===
galleryPlugin.addEventListener('select', ({ item }: any) => {
  // change panorama
  changeScene(item.panorama);

  // Re-apply the 'open' state after selection unless the user explicitly
  // clicked the gallery button (in which case they intended to toggle it).
  setTimeout(() => {
    if (lastClickedGalleryButton) return;
    const g = document.querySelector('.psv-gallery') as HTMLElement | null;
    if (g) {
      g.classList.add('psv-gallery--open');
      g.setAttribute('aria-hidden', 'false');
      if (g.style.display === 'none') g.style.display = '';
    }
  }, 0);
});

// When the user explicitly clicks the gallery button, respect that intent:
// if we had forced the gallery to stay open via data-keep-open, remove that
// attribute so the plugin can close normally.
// Toggle gallery open/close when the user clicks the gallery button. We
// record that the button was clicked so select handlers won't undo the
// user's intent.
document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLElement | null;
  if (!target) return;
  const galleryBtn = target.closest('.psv-gallery-button') as HTMLElement | null;
  if (!galleryBtn) return;

  const g = document.querySelector('.psv-gallery') as HTMLElement | null;
  if (!g) return;

  lastClickedGalleryButton = true;
  // allow other handlers to run, then reset the flag
  setTimeout(() => (lastClickedGalleryButton = false), 200);

  if (g.classList.contains('psv-gallery--open')) {
    g.classList.remove('psv-gallery--open');
    g.setAttribute('aria-hidden', 'true');
    g.style.display = 'none';
  } else {
    g.classList.add('psv-gallery--open');
    g.setAttribute('aria-hidden', 'false');
    g.style.display = '';
  }
});

// === 6. Carrega os markers iniciais ===
viewer.addEventListener('ready', () => {
  markersPlugin.setMarkers(markersByPanorama['sphere.jpg']);
});

