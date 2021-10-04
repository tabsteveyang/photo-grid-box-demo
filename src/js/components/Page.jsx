import { useState } from 'react';
import PhotoGridBox from 'photo-grid-box';
import Footer from './Footer';

const Page = () => {
  const [imgs, setImgs] = useState([
    {
      src: "https://c1.staticflickr.com/1/699/22812601591_12ca1ee7cf_n.jpg",
      payload: {
        title: 1
      }
    },
    {
      src: "https://c1.staticflickr.com/1/573/22409354059_ba46782c8f_n.jpg",
      payload: {
        title: 2
      }
    },
    {
      src: "https://c1.staticflickr.com/6/5704/22410267477_303a090dcd_m.jpg",
      payload: {
        title: 3
      }
    },
    {
      src: "https://c1.staticflickr.com/1/683/22207558073_8ecdb7abc4_n.jpg",
      payload: {
        title: 4
      }
    },
    {
      src: "https://c1.staticflickr.com/6/5735/22872942450_7885235293_n.jpg",
      payload: {
        title: 5
      }
    },
    {
      src: "https://c1.staticflickr.com/6/5772/22601600994_083f34661c_n.jpg",
      payload: {
        title: 6
      }
    },
    {
      src: "https://c1.staticflickr.com/1/731/23230259025_673793e478_n.jpg",
      payload: {
        title: 7
      }
    },
    {
      src: "https://c1.staticflickr.com/3/2937/14472303464_1890a1c27b_n.jpg",
      payload: {
        title: 8
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4665/38432665950_12d8d33002_n.jpg",
      payload: {
        title: 9
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4649/38432665780_71b232cc13_n.jpg",
      payload: {
        title: 10
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4704/38432663720_c233066c15_n.jpg",
      payload: {
        title: 11
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4677/40243327101_965347ed63_n.jpg",
      payload: {
        title: 12
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4696/38432663200_459cbab4dd_n.jpg",
      payload: {
        title: 13
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4650/40243326751_cb7845848f_n.jpg",
      payload: {
        title: 14
      }
    },
    {
      src: "https://c1.staticflickr.com/5/4709/38432662890_06b0ac1600_n.jpg",
      payload: {
        title: 15
      }
    }
  ])

  const [settings, setSettings] = useState({
    rowGap: 3,
    colGap: 3,
    showUnCompleteRow: false,
    isButtonClicked: false
  })

  const imgOnClick = (e, imgConfig) => {
    alert('img clicked')
    console.log('img clicked!', e, imgConfig)
  }
  const panelHTMLSetter = (imgConfig) => {
    let result = null
    if (imgConfig && imgConfig.payload && imgConfig.payload.title) {
      result = <div className="photo-block__panel__title"> { imgConfig.payload.title } </div>
    }
    return result
  }

  const onLoadMorePicturesButtonClick = () => {
    const newData = [
      {
        src: "https://c1.staticflickr.com/5/4616/38432662220_4874c887f1_n.jpg",
        payload: {
          title: 16
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4719/38432661400_f53017f598_n.jpg",
        payload: {
          title: 17
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4753/38432660740_78d6d34d89_n.jpg",
        payload: {
          title: 18
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4654/39345481745_1be0a0098c_n.jpg",
        payload: {
          title: 19
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4704/38432657930_c96c750753_n.jpg",
        payload: {
          title: 20
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4754/38432659650_9d6e5876a1_n.jpg",
        payload: {
          title: 21
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4609/39345480685_62fafe15e2_n.jpg",
        payload: {
          title: 22
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4664/38432658670_ff133e5369_n.jpg",
        payload: {
          title: 23
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4702/39533019874_875e198031_n.jpg",
        payload: {
          title: 24
        }
      },
      {
        src: "https://c1.staticflickr.com/5/4703/25372643047_302849c0d0_n.jpg",
        payload: {
          title: 25
        }
      }
    ]
    setImgs([
      ...imgs,
      ...newData
    ])
    setSettings({
      ...settings,
      showUnCompleteRow: true,
      isButtonClicked: true
    })
  }

  const onInputChange = (attribute, value) => {
    setSettings({
      ...settings,
      [attribute]: value
    })
  }

  return <div className='page'>
    {
      <PhotoGridBox
        imgs = {imgs} // set the pictures to show
        rowGap = {settings.rowGap} // set the height between each row (optional)
        colGap = {settings.colGap} // set the width between each block (optional)
        imgOnClick = {imgOnClick} // the onClick event handler for each block (optional)
        panelHTMLSetter = {panelHTMLSetter} // the function that returns a JSX for adding the children on the panel (optional)
        showUnCompleteRow = {settings.showUnCompleteRow} // In default, the PhotoGridBox will hide the last row if the last row is not complete; to make it looks more natural when loading pictures chunk by chunk. When there is no more picture to load, or for any reason, you can set the prop to true cancel the feature. (optional)
      />
    }
    <div className="panel">
      {
        !settings.isButtonClicked
          ? <button onClick={onLoadMorePicturesButtonClick}>Load More Pictures</button>
          : null
      }
      <span>
        colGap: <input type="number" value={settings.colGap} onChange={e => onInputChange('colGap', parseInt(e.target.value))}/>
      </span>
      <span>
        rowGap: <input type="number" value={settings.rowGap} onChange={e => onInputChange('rowGap', parseInt(e.target.value))}/>
      </span>
    </div>
    <Footer />
  </div>
}

export default Page
