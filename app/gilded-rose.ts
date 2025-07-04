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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
                this.decreaseQuality(this.items[i]);
            } else if (this.items[i].name === "Aged Brie") {
                this.updateBrie(this.items[i]);
            } else {
                this.updateBackstagePasses(this.items[i]);
            }
        }

        return this.items;
    }
}
