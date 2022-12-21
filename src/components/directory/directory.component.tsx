import DirectoryItem from "../directory-item/directory-item-component";
import {
  DirectoryContainer
} from "./directory.styles";
import { Key } from "react";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "tanks",
    imageUrl: "https://i.ibb.co/M7qxXmR/20200308-LLC-Indian-Rock-07625.jpg",
    route: "shop/tanks",
  },
  {
    id: 3,
    title: "tshirts",
    imageUrl: "https://i.ibb.co/xg7GMnr/LCCdye-pink.jpg",
    route: "shop/tshirts",
  },
  {
    id: 4,
    title: "sweaters",
    imageUrl: "https://i.ibb.co/MSRH4Wq/LCCsweater.jpg",
    route: "shop/sweaters",
  },
  {
    id: 5,
    title: "special",
    imageUrl: "https://i.ibb.co/BwYx6JB/LCCdye.jpg",
    route: "shop/special",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
