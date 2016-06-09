import { ElementRef, OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, Renderer, EventEmitter, IterableDiffers } from '@angular/core';
import { SelectItem } from '../common';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/common';
export declare class MultiSelect implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, ControlValueAccessor {
    private el;
    private domHandler;
    private renderer;
    options: SelectItem[];
    onChange: EventEmitter<any>;
    scrollHeight: string;
    defaultLabel: string;
    style: any;
    styleClass: string;
    disabled: boolean;
    overlayVisible: boolean;
    value: any[];
    onModelChange: Function;
    onModelTouched: Function;
    private valuesAsString;
    private hover;
    private focus;
    private documentClickListener;
    private panel;
    private container;
    private selfClick;
    private panelClick;
    private filterValue;
    private visibleOptions;
    private filtered;
    differ: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, differs: IterableDiffers);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngDoCheck(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    onItemClick(event: any, value: any): void;
    isSelected(value: any): boolean;
    findSelectionIndex(val: any): number;
    toggleAll(event: any, checkbox: any): void;
    isAllChecked(): boolean;
    show(): void;
    hide(): void;
    close(event: any): void;
    onMouseenter(event: any): void;
    onMouseleave(event: any): void;
    onMouseclick(event: any, input: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    updateLabel(): void;
    findLabelByValue(val: any): string;
    onFilter(event: any): void;
    isItemVisible(option: SelectItem): boolean;
    getVisibleOptions(): SelectItem[];
    ngOnDestroy(): void;
}
