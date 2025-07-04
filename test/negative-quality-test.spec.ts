import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Quality should always be positive', function () {
    let gildedRose: GildedRose;
    let items: Item[];

    before(function () {
        gildedRose = new GildedRose([new Item("Cheese", 5, 4),
            new Item("Book", 3, 1),
            new Item("Bread", 8, 4),
            new Item("Coffee", 5, 3)]);
    });

    beforeEach(function () {
        for (let i = 0; i < 6; i++) {
            items = gildedRose.updateQuality();
        }
    });

    it("After 6 days - quality of all items should be equal to 0", function () {
        expect(items[0].quality).to.equal(0);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(0);
    });
})