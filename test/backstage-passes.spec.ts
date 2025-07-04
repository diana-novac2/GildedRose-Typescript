import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe("Backstage passes", function () {
   let gildedRose: GildedRose;
   let items: Item[];

   before(function () {
       gildedRose = new GildedRose([
           new Item("Backstage passes to a TAFKAL80ETC concert", 12, 1),
           new Item("Backstage passes to a TAFKAL80ETC concert", 9, 2),
           new Item("Backstage passes to a TAFKAL80ETC concert", 10, 3)
       ]);
   });

   it("Check that the quality increases by 2 when there are 10 or less days left", function () {
      for (let i = 0; i < 3; i++) {
          items = gildedRose.updateQuality();
      }

      expect(items[0].quality).to.equal(5);
      expect(items[1].quality).to.equal(8);
      expect(items[2].quality).to.equal(9);
   });

   it("Check that the quality increases by 3 when there are 5 or less days left", function () {
       for (let i = 0; i < 5; i++) {
           items = gildedRose.updateQuality();
       }

       expect(items[0].quality).to.equal(16);
       expect(items[1].quality).to.equal(22);
       expect(items[2].quality).to.equal(22);
   });

   it("Check that after the concert passes the quality becomes 0", function (){
       for (let i = 0; i < 5; i++) {
           items = gildedRose.updateQuality();
       }

       expect(items[0].quality).to.equal(0);
       expect(items[1].quality).to.equal(0);
       expect(items[2].quality).to.equal(0);
   });
});
