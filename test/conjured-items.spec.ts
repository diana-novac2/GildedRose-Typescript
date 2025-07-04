import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe("Conjured items", function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([
            new Item("Conjured Mana Cake", 2, 13),
            new Item("Conjured Mana Cake", 3, 15),
            new Item("Conjured Mana Cake", 2, 14),
            new Item("Conjured Mana Cake", 4, 10)
        ]);
    });

    it("Check conjured items degrade twice as fast as normal ones", function () {
        items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
        expect(items[1].quality).to.equal(13);
        expect(items[2].quality).to.equal(12);
        expect(items[3].quality).to.equal(8);
    });
})