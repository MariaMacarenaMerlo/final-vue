import { artworkSeeder } from "../data/artworkSeeder.js";

const STORAGE_ARTWORKS = "artworks";

export function seedArtworks() {
  const initialArtworks = artworkSeeder.map((artwork) => ({
    ...artwork,
  }));
  saveArtworks(initialArtworks);
  return initialArtworks;
}

export function getArtworks() {
  const artworks = localStorage.getItem(STORAGE_ARTWORKS);

  if (artworks === null) {
    return seedArtworks();
  }

  return JSON.parse(artworks);
}

export function saveArtworks(artworks) {
  localStorage.setItem(STORAGE_ARTWORKS, JSON.stringify(artworks));
}

export function createArtwork(artwork) {
  const artworks = getArtworks();

  const newArtwork = {
    ...artwork,
    id: Date.now(),
  };

  artworks.push(newArtwork);
  saveArtworks(artworks);

  return newArtwork;
}

export function deleteArtwork(id) {
  const artworks = getArtworks();

  const updateArtworks = artworks.filter(
    (artwork) => artwork.id !== Number(id),
  );

  saveArtworks(updateArtworks);
}

/**
 *
 * @param {*} id
 * @param {*} updatedArtwork
 */
export function updateArtwork(id, updatedArtwork) {
  const artworks = getArtworks();

  const updatedArtworks = artworks.map((artwork) =>
    artwork.id === Number(id)
      ? { ...artwork, ...updatedArtwork, id: artwork.id }
      : artwork,
  );

  saveArtworks(updatedArtworks);
}
