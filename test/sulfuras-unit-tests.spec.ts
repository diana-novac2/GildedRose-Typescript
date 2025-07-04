import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras requirements', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 5, 10),
        new Item("Sulfuras, Hand of Ragnaros", 6, 5),
        new Item("Sulfuras, Hand of Ragnaros", 7, 15),
        new Item("Sulfuras, Hand of Ragnaros", 10, 20)]);
    });

    it('Sulfuras never has to be sold - check after 5 days', function () {
        for (let i = 0; i < 5; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].sellIn).to.equal(5);
        expect(items[1].sellIn).to.equal(6);
        expect(items[2].sellIn).to.equal(7);
        expect(items[3].sellIn).to.equal(10);
    });

    it('Sulfuras never has to be sold - check after 10 days', function () {
        for (let i = 0; i < 5; i++) {
            items = gildedRose.updateQuality();
        }

        expect(items[0].sellIn).to.equal(5);
        expect(items[1].sellIn).to.equal(6);
        expect(items[2].sellIn).to.equal(7);
        expect(items[3].sellIn).to.equal(10);
    });

    it("Sulfuras' quality never decreases - check after 10 days", function () {
        expect(items[0].quality).to.equal(10);
        expect(items[1].quality).to.equal(5);
        expect(items[2].quality).to.equal(15);
        expect(items[3].quality).to.equal(20);
    });
})