import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master Test', function (){
    let gildedRose: GildedRose;
    let items: Item[];
    before(function (){
        gildedRose = new GildedRose([
            new Item("Aged Brie", 5, 10),
            new Item("Aged Brie", 6, 5),
            new Item("Aged Brie", 7, 5),
            new Item("Book", 4, 5),
            new Item("Bread", 4, 3),
            new Item("Sulfuras, Hand of Ragnaros", 1, 5),
            new Item("Backstage passes to a TAFKAL80ETC concert", 8, 3),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6),
            new Item("Cheese", 4, 3),
            new Item("Sulfuras, Hand of Ragnaros", 5, 3),
            new Item("Aged Brie", 5, 46),]);
    });

    it("Quality of items after 3 days", function() {
        for (let i = 0; i < 3; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].quality).to.equal(13);
        expect(items[1].quality).to.equal(8);
        expect(items[2].quality).to.equal(8);
        expect(items[3].quality).to.equal(2);
        expect(items[4].quality).to.equal(0);
        expect(items[5].quality).to.equal(5);
        expect(items[6].quality).to.equal(9);
        expect(items[7].quality).to.equal(15);
        expect(items[8].quality).to.equal(0);
        expect(items[9].quality).to.equal(3);
        expect(items[10].quality).to.equal(49);
    });

    it("Quality of items after 5 days", function() {
        for (let i = 0; i < 2; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].quality).to.equal(15);
        expect(items[1].quality).to.equal(10);
        expect(items[2].quality).to.equal(10);
        expect(items[3].quality).to.equal(0);
        expect(items[4].quality).to.equal(0);
        expect(items[5].quality).to.equal(5);
        expect(items[6].quality).to.equal(15);
        expect(items[7].quality).to.equal(21);
        expect(items[8].quality).to.equal(0);
        expect(items[9].quality).to.equal(3);
        expect(items[10].quality).to.equal(50);
    });

    it("Quality of items after 8 days", function() {
        for (let i = 0; i < 3; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].quality).to.equal(21);
        expect(items[1].quality).to.equal(15);
        expect(items[2].quality).to.equal(14);
        expect(items[3].quality).to.equal(0);
        expect(items[4].quality).to.equal(0);
        expect(items[5].quality).to.equal(5);
        expect(items[6].quality).to.equal(24);
        expect(items[7].quality).to.equal(0);
        expect(items[8].quality).to.equal(0);
        expect(items[9].quality).to.equal(3);
        expect(items[10].quality).to.equal(50);
    });

    it("sellIn of items after 8 days", function () {
        expect(items[0].sellIn).to.equal(-3);
        expect(items[1].sellIn).to.equal(-2);
        expect(items[2].sellIn).to.equal(-1);
        expect(items[3].sellIn).to.equal(-4);
        expect(items[4].sellIn).to.equal(-4);
        expect(items[5].sellIn).to.equal(1);
        expect(items[6].sellIn).to.equal(0);
        expect(items[7].sellIn).to.equal(-3);
        expect(items[8].sellIn).to.equal(-4);
        expect(items[9].sellIn).to.equal(5);
        expect(items[10].sellIn).to.equal(-3);
    })
});

