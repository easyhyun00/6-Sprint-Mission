import React from 'react';
import { getProducts } from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem';
import Grid from '@mui/material/Grid';
import styles from './style.module.css';
import { ItemType } from 'types/item';

const BestProductList = () => {
  const [bestProduct, setBestProduct] = useState<ItemType[]>([]);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const handleBestItemLoad = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getProducts({ pageSize: 4, orderBy: 'favorite' });
      setBestProduct(result.list);
    } catch (error) {
      setLoadingError(error as Error);
      return;
    }
  };

  useEffect(() => {
    handleBestItemLoad();
  }, []);

  return (
    <section>
      <h3>베스트 상품</h3>
      {loadingError?.message && <span>{loadingError.message}</span>}
      <Grid container spacing={2}>
        {bestProduct.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.id}
              className={`${styles[`item-${index}`]}`}
            >
              <ProductItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default BestProductList;
