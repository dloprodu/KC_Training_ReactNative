import axios, { AxiosPromise } from 'axios';

import { Comic, Character } from './models';

const PUBLIC_API_KEY = '01a836d781951559381f4c504ecd9957';
const PRIVATE_API_KEY = '33729382a0144cf9761002fc90ebf4b97e942b7e';
const ORIGIN = 'training.kc.com'

const BASE_URL = 'https://gateway.marvel.com/v1/public';

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Referer'] = ORIGIN;
}

/**
 * Fetchs individual print and digital comic issues, collections and graphic novels. For example: Amazing Fantasy #15.
 * 
 * @param offset
 * @param limit
 * @return {AxiosPromise<Comic[]>}
 */
export function fetchComics(offset = 0, limit = 30): AxiosPromise<Comic[]> {
  const url = `/comics?apikey=${PUBLIC_API_KEY}&limit=${limit}&offset=${offset}&orderBy=title&noVariants=true`;
  return axios.get(url);
}

/**
 * Search comics.
 * 
 * @param query
 * @param offset
 * @param limit
 * @return {AxiosPromise<Comic[]>}
 */
export function searchComics(query, offset = 0, limit = 30): AxiosPromise<Comic[]> {
  const url = `/comics?apikey=${PUBLIC_API_KEY}&limit=${limit}&offset=${offset}&titleStartsWith=${query}&noVariants=true`;
  return axios.get(url);
}

/**
 * Fetchs the women, men, organizations, alien species, deities, animals, non-corporeal entities, 
 * trans-dimensional manifestations, abstract personifications, and green amorphous blobs which occupy 
 * the Marvel Universe (and various alternate universes, timelines and altered realities therein). For example, Spider-Man.
 * 
 * @param comicId
 * @return {AxiosPromise<Character[]>}
 */
export function fetchCharacters(comicId): AxiosPromise<Character[]> {
  const url = `/comics/${comicId}/characters?apikey=${PUBLIC_API_KEY}`;
  return axios.get(url);
}

export function postComicCharacter(character) {
  // TODO: Here there should be a real post call.
  return new Promise((resolve, reject) => {
    resolve(character);
  });
}