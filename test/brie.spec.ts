import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe("Aged Brie", function () {
   let gildedRose: GildedRose;
   let items: Item[] = [];

   before(function () {
       gildedRose = new GildedRose([
           new Item("Aged Brie", 5, 10),
           new Item("Aged Brie", 6, 5),
           new Item("Aged Brie", 10, 11)
       ]);
   })

    it("Aged Brie should increase - check after 5 days", function () {
        for (let i = 0; i < 5; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].quality).to.equal(15);
        expect(items[1].quality).to.equal(10);
        expect(items[2].quality).to.equal(16);
    });

   it("Check that aged Brie increases twice as fast after sellIn < 0", function () {
       for (let i = 0; i < 5; i++) {
           items = gildedRose.updateQuality();
       }

       expect(items[0].quality).to.equal(25);
       expect(items[1].quality).to.equal(19);
       expect(items[2].quality).to.equal(21);
   })
});