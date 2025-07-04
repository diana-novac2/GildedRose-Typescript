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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
                this.decreaseQuality(this.items[i]);
                continue;
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }

            this.items[i].sellIn -= 1;

            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
