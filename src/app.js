import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import GalleryGrid from 'photo-grid-box';

const files = [
    {
	url: "https://c1.staticflickr.com/1/699/22812601591_12ca1ee7cf_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/1/573/22409354059_ba46782c8f_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/6/5704/22410267477_303a090dcd_m.jpg",
	vertical: true,
    },
    {
	url: "https://c1.staticflickr.com/1/683/22207558073_8ecdb7abc4_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/6/5735/22872942450_7885235293_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/6/5772/22601600994_083f34661c_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/1/731/23230259025_673793e478_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/3/2937/14472303464_1890a1c27b_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4665/38432665950_12d8d33002_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4649/38432665780_71b232cc13_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4704/38432663720_c233066c15_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4677/40243327101_965347ed63_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4696/38432663200_459cbab4dd_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4650/40243326751_cb7845848f_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4709/38432662890_06b0ac1600_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4616/38432662220_4874c887f1_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4719/38432661400_f53017f598_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4753/38432660740_78d6d34d89_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4654/39345481745_1be0a0098c_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4704/38432657930_c96c750753_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4754/38432659650_9d6e5876a1_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4609/39345480685_62fafe15e2_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4664/38432658670_ff133e5369_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4702/39533019874_875e198031_n.jpg",
	vertical: false,
    },
    {
	url: "https://c1.staticflickr.com/5/4703/25372643047_302849c0d0_n.jpg",
	vertical: false,
    },
];

const jsx = (
    <div>
        <GalleryGrid
            files={files}
            flickrHosted={true}
        />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app-root'));
