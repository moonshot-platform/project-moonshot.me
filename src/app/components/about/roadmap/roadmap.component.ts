import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

import { CarouselAlignMode, CarouselComponent, CarouselConfig, CarouselWidthMode } from 'ng-carousel-cdk';

@Component({
    selector: 'app-roadmap',
    templateUrl: './roadmap.component.html',
    styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

    items: CarouselItem[] = [
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Initiate Moonshot',
            icon: Icon.ACCOMPLISHED,
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Building social media presence',
            icon: Icon.ACCOMPLISHED,
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Presale',
            icon: Icon.ACCOMPLISHED,
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Listing at PancakeSwap',
            icon: Icon.ACCOMPLISHED,
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: '31% of the total supply burned after launch',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Delta listing',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Blockfolio listing',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Coinmarketcap tracking',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q1 2021',
            span: ' - done',
            description: 'Manual burning of tokens',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Listed at P2PB2B exchange',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Listed at BitMart exchange',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Merchandise store at TeePublic',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Coingecko tracking',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Listed at Hotbit exchange',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'New website launch',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - ongoing',
            description: 'Conceptual Storyboard for MoonShooters series created (MoonBoxes)',
            icon: Icon.ONGOING
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'Conceptual Artwork for 1,000 NFTs created (MoonBoxes)',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q2 2021',
            span: ' - done',
            description: 'LATOKEN exchange listing',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q3 2021',
            span: ' - done',
            description: 'MoonBoxes',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q3 2021',
            span: ' - done',
            description: 'Moonboxes audited by Solidity Finance',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q4 2021',
            span: ' - done',
            description: 'Moonshooter NFT series launched\nRa8bits NFT series launched MoonSea',
            icon: Icon.ACCOMPLISHED
        },
        {
            title: 'Q1 2022',
            span: '',
            description: 'Arcade style games',
            icon: Icon.UPCOMING
        },
        {
            title: 'Q1 2022',
            span: '',
            description: 'Lottery Pools',
            icon: Icon.UPCOMING
        },
    ]

    @ViewChild(CarouselComponent, { static: true }) carouselRef?: CarouselComponent;

    config: CarouselConfig<CarouselItem> = {
        widthMode: CarouselWidthMode.PX,
        slideWidth: 270,
        transitionDuration: 250,
        alignMode: CarouselAlignMode.LEFT,
        shouldLoop: false,
        items: this.items,
        autoplayEnabled: false,
        dragEnabled: true,
        shouldRecalculateOnResize: true,
        recalculateDebounce: 300,
    };
    readonly configForm = new FormGroup({
        widthMode: new FormControl(this.config.widthMode),
        alignMode: new FormControl(this.config.alignMode),
        slideWidth: new FormControl(this.config.slideWidth),
        transitionDuration: new FormControl(this.config.transitionDuration),
        shouldLoop: new FormControl(this.config.shouldLoop),
        slidesQuantity: new FormControl((this.config?.items ?? []).length),
        autoplayEnabled: new FormControl(this.config.autoplayEnabled),
        dragEnabled: new FormControl(this.config.dragEnabled),
        shouldRecalculateOnResize: new FormControl(this.config.shouldRecalculateOnResize),
        recalculateDebounce: new FormControl(this.config.recalculateDebounce),
    });
    readonly slideWidth$ = this.slideWidthChanges();
    readonly widthMode$ = this.widthModeChanges();
    readonly transitionDuration$ = this.transitionDurationChanges();
    readonly slidesQuantity$ = this.slidesQuantityChanges();
    readonly recalculateDebounce$ = this.recalculateDebounceChanges();
    readonly PX = CarouselWidthMode.PX;
    readonly PERCENT = CarouselWidthMode.PERCENT;
    readonly LEFT = CarouselAlignMode.LEFT;
    readonly CENTER = CarouselAlignMode.CENTER;
    itemIndex = 0;
    maxWidth = 0;
    readonly MAX_WIDTH_PERCENTS = 110;
    readonly MAX_WIDTH_PIXELS = 1000;
    private readonly destroyed$ = new Subject<void>();

    constructor(
        private cdr: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.maxWidth = this.getMaxWidth(this.config.widthMode);
        this.listenConfigChanges();
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    setItemIndex(newIndex: number): void {
        this.itemIndex = newIndex;
    }

    private slideWidthChanges(): Observable<number> {
        return this.configForm.valueChanges
            .pipe(
                map((form: { slideWidth: number }) => form.slideWidth),
                startWith(this.configForm.controls.slideWidth.value),
            );
    }

    private widthModeChanges(): Observable<CarouselWidthMode> {
        return this.configForm.valueChanges
            .pipe(
                map((form: { widthMode: CarouselWidthMode }) => form.widthMode),
                startWith(this.configForm.controls.widthMode.value),
            );
    }

    private transitionDurationChanges(): Observable<number> {
        return this.configForm.valueChanges
            .pipe(
                map((form: { transitionDuration: number }) => form.transitionDuration),
                startWith(this.configForm.controls.transitionDuration.value),
            );
    }

    private slidesQuantityChanges(): Observable<number> {
        return this.configForm.valueChanges
            .pipe(
                map((form: { slidesQuantity: number }) => form.slidesQuantity),
                startWith(this.configForm.controls.slidesQuantity.value),
            );
    }

    private recalculateDebounceChanges(): Observable<number> {
        return this.configForm.valueChanges
            .pipe(
                map((form: { recalculateDebounce: number }) => form.recalculateDebounce),
                startWith(this.configForm.controls.recalculateDebounce.value),
            );
    }

    private listenConfigChanges(): void {
        this.configForm.valueChanges
            .pipe(
                takeUntil(this.destroyed$),
            )
            .subscribe((value: CarouselConfig & { slidesQuantity: number }) => {
                const maxWidthNew = this.getMaxWidth(value.widthMode);
                const widthPercentage = 100 * (value?.slideWidth ?? 1) / this.maxWidth;
                value.slideWidth = Math.floor(maxWidthNew * widthPercentage / 100);
                this.maxWidth = maxWidthNew;
                this.config = value;
                this.configForm.controls.slideWidth.setValue(value.slideWidth, { emitEvent: false });
                this.config.items = this.items;
                this.cdr.markForCheck();
            });
    }

    private getMaxWidth(mode?: CarouselWidthMode): number {
        return mode === CarouselWidthMode.PERCENT
            ? this.MAX_WIDTH_PERCENTS
            : this.MAX_WIDTH_PIXELS;
    }

}

export interface CarouselItem {
    title: string;
    span: string;
    description: string;
    icon: string
}

enum Icon {
    ACCOMPLISHED = 'done',
    ONGOING = 'sync',
    UPCOMING = 'auto_awesome'
}