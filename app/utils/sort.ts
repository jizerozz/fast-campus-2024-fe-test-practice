// TODO: 데이터를 정렬하는 로직을 구현하세요!
import { Product } from '~/types/product';

export enum SortType {
  ID = 'ID',
  NAME = 'NAME',
  PRICE = 'PRICE',
}

export enum SortDirection {
  ASC = 'ASC', // 오름차순. ex) 1, 2, 3...
  DESC = 'DESC', // 내림차순. ex) ... 3, 2, 1
}

export const SortProduct = (
  data: Product[],
  sortBy: SortType,
  sortDirection: SortDirection
): Product[] => {
  let sortDraft = data;
  switch (sortBy) {
    case SortType.ID:
      // TODO: sortById 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      sortDirection === 'ASC'
        ? sortById(data)
        : data.sort((a: Product, b: Product) => b.id - a.id);

      break;
    case SortType.NAME:
      // TODO: sortByName 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      sortDirection === 'ASC'
        ? sortByName(data)
        : data.sort((a: Product, b: Product) => b.name.localeCompare(a.name));
      break;
    case SortType.PRICE:
      // TODO: sortByPrice 유틸리티와 dir을 이용해 올바른 기준의 오름차순 혹은 내림차순으로 정렬하세요.
      sortDirection === 'ASC'
        ? sortByPrice(data)
        : data.sort((a: Product, b: Product) => b.price - a.price);
      break;
    default:
      break;
  }

  sortDraft = sortDraft.sort((a: Product, b: Product) => {
    if (a.stock === 0 && b.stock !== 0) {
      return 1;
    } else if (a.stock !== 0 && b.stock === 0) {
      return -1;
    } else {
      return 0;
    }
  });
  // TODO: 누가 또 뭐라고 했던것 같은데... 😴 (우선 구현하지 않습니다.)
  return sortDraft;
};

const sortById = (data: Product[]): Product[] => {
  // TODO: Product.id를 기준으로 오름차순 정렬하세요.
  return data.sort((a: Product, b: Product) => a.id - b.id);
};

const sortByName = (data: Product[]): Product[] => {
  // TODO: Product.name을 기준으로 오름차순 정렬하세요.
  return data.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
};

const sortByPrice = (data: Product[]): Product[] => {
  // TODO: Product.price를 기준으로 오름차순 정렬하세요.
  return data.sort((a: Product, b: Product) => a.price - b.price);
};
