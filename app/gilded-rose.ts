export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    decreaseQuality(item: Item) {
        if (item.name === "Conjured Mana Cake") {
            this.updateConjured(item);
            return;
        }

        if (item.quality > 0) {
            item.quality -= 1;
        }

        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality -= 1;
        }
    }

    updateBrie(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
        }

        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality < 50) {
            item.quality += 1;
        }
    }

    updateBackstagePasses(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
        }

        if (item.sellIn < 11 && item.quality < 50) {
            item.quality += 1;
        }

        if (item.sellIn < 6 && item.quality < 50) {
            item.quality += 1;
        }

        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality = 0;
        }
    }

    updateConjured(item: Item) {
        if (item.quality > 1) {
            item.quality -= 2;
        }

        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > 1) {
            item.quality -= 2;
        }
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            if (currentItem.name != "Aged Brie" && currentItem.name != "Backstage passes to a TAFKAL80ETC concert") {
                this.decreaseQuality(currentItem);
            } else if (currentItem.name === "Aged Brie") {
                this.updateBrie(currentItem);
            } else if (currentItem.name === "Backstage passes to a TAFKAL80ETC concert") {
                this.updateBackstagePasses(currentItem);
            }
        }

        return this.items;
    }
}
