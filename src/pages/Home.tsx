import type { FC } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { CardContext } from '../providers/CardProvider';

const Home: FC = () => {
  const { isLoading, images } = useContext(CardContext);

  if (isLoading) {
    return <p>Images are loading ...</p>;
  }

  return (
    <ul>
      {images.map((image, i) => (
        <li key={i}>{image}</li>
      ))}
    </ul>
  );
};

export default Home;
