import { useState } from "react";
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from "../lib/items";
import Header from "./header";
import ItemList from "./item-list";
import MarkAllAsUnpacked from "./mark-all-as-unpacked";
import NewItem from "./new-item";

const Application = () => {
  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header items={items} />
      <NewItem addItem={add} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          update={update}
          remove={remove}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          update={update}
          remove={remove}
        />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
