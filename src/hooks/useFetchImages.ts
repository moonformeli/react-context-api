import { useState, useEffect } from 'react';

interface Data {
  tags: string[];
  createdAt: string;
  updatedAt: string;
  validated: boolean;
  owner: string;
  file: string;
  mimetype: string;
  size: number;
  _id: string;
  url: string;
}

const RANDOM_CAT = 'https://cataas.com';
const RANDOM_CAT_IMG_API = `${RANDOM_CAT}/cat?json=true`;

export const useFetchImages = (count: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    setIsLoading(true);
    const res = await Promise.all<Data>(
      new Array(count / 2).fill(0).map(() => {
        return fetch(RANDOM_CAT_IMG_API).then((res) => res.json());
      })
    );
    setIsLoading(false);

    setImages(res.map((data) => `${RANDOM_CAT}${data.url}`));
  };

  useEffect(() => {
    fetchImages();

    return () => {
      setIsLoading(false);
      setImages([]);
    };
  }, [count]);

  return { isLoading, images };
};

export default useFetchImages;
