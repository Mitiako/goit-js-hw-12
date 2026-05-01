import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

// Очищення галереї
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

// Показати loader
export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

// Сховати loader
export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

// Створення HTML для однієї картки
export function createGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <div class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="gallery-info">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
      </div>
    </div>
  `;
}

// Рендер масиву карток
export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(img => createGalleryItem(img)).join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  // Ініціалізація або оновлення SimpleLightbox
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}
