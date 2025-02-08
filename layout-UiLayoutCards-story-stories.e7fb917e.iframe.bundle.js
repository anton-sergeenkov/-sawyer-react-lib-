"use strict";(self.webpackChunksawyer_ui=self.webpackChunksawyer_ui||[]).push([[307],{"./ui-kit/layout/UiLayoutCards/story.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>story_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),fonts=__webpack_require__("./app/fonts.ts"),classnames=(__webpack_require__("./app/globals.css"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),utils=__webpack_require__("./ui-kit/utils.ts"),UiLink=__webpack_require__("./ui-kit/basic/UiLink/UiLink.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Menu=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),MoreVert=__webpack_require__("./node_modules/@mui/icons-material/esm/MoreVert.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/surfaces/OptionsElement/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const OptionsElement_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0,OptionsElement=props=>{const{options,classes={container:"",button:"",icon:"",link:""}}=props,[anchorEl,setAnchorEl]=(0,react.useState)(null),open=Boolean(anchorEl),handleClose=()=>{setAnchorEl(null)};return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(OptionsElement_styles_module.container,classes.container),children:[(0,jsx_runtime.jsx)(IconButton.A,{onClick:event=>{setAnchorEl(event.currentTarget)},className:OptionsElement_styles_module.button,children:(0,jsx_runtime.jsx)(MoreVert.A,{className:classnames_default()(OptionsElement_styles_module.icon,classes.icon)})}),(0,jsx_runtime.jsx)(Menu.A,{anchorEl,open,onClose:handleClose,children:options.map(((element,index)=>(0,jsx_runtime.jsx)(MenuItem.A,{onClick:handleClose,sx:{minHeight:"auto"},children:(0,jsx_runtime.jsx)(UiLink.A,{href:element.link,theme:"dark-underlined",className:classnames_default()(OptionsElement_styles_module.link,fonts.ET.className,classes.link),children:element.name})},index)))})]})},OptionsElement_OptionsElement=OptionsElement;OptionsElement.__docgenInfo={description:"",methods:[],displayName:"OptionsElement"};var UiLayoutCards_styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/layout/UiLayoutCards/styles.module.css"),styles_module_options={};styles_module_options.styleTagTransform=styleTagTransform_default(),styles_module_options.setAttributes=setAttributesWithoutAttributes_default(),styles_module_options.insert=insertBySelector_default().bind(null,"head"),styles_module_options.domAPI=styleDomAPI_default(),styles_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UiLayoutCards_styles_module.A,styles_module_options);const layout_UiLayoutCards_styles_module=UiLayoutCards_styles_module.A&&UiLayoutCards_styles_module.A.locals?UiLayoutCards_styles_module.A.locals:void 0,UiLayoutCards=props=>{const{theme="light",themeLink,items,isOptions=!1}=props,stylesTheme=(0,utils.a)(theme,layout_UiLayoutCards_styles_module);return(0,jsx_runtime.jsx)("div",{className:classnames_default()(layout_UiLayoutCards_styles_module.gridContainer,stylesTheme),children:items.map(((element,index)=>(0,jsx_runtime.jsxs)("div",{className:layout_UiLayoutCards_styles_module.gridItem,children:[(0,jsx_runtime.jsx)("a",{href:element.link,className:layout_UiLayoutCards_styles_module.logo,style:{backgroundImage:`url(${element.img.src})`},target:"_blank"}),(0,jsx_runtime.jsxs)("div",{className:layout_UiLayoutCards_styles_module.gridContent,children:[(0,jsx_runtime.jsx)("h3",{className:layout_UiLayoutCards_styles_module.header,children:element.title}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(fonts.ET.className,layout_UiLayoutCards_styles_module.description),children:element.description}),element.links.map(((itemLink,indexLink)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(UiLink.A,{href:itemLink.link,theme:themeLink,children:itemLink.name})},indexLink))),isOptions&&(0,jsx_runtime.jsx)(OptionsElement_OptionsElement,{options:element.links})]})]},index)))})},UiLayoutCards_UiLayoutCards=UiLayoutCards;UiLayoutCards.__docgenInfo={description:"",methods:[],displayName:"UiLayoutCards"};const items=[{title:"Title",link:"https://letscode-dev.github.io/",img:{src:"static/media/card.e8fa2e5d.svg",height:200,width:200,blurDataURL:"static/media/card.e8fa2e5d.svg"},description:"School of Frontend Development, courses and mentoring",links:[{name:"Website",link:"https://letscode-dev.github.io/"},{name:"YouTube",link:"https://www.youtube.com/c/letscode-dev"}]}],story_stories={title:"Layout/UiLayoutCards",component:UiLayoutCards_UiLayoutCards,tags:["autodocs"],argTypes:{theme:{options:["light","dark"],control:{type:"radio"}},themeLink:{options:UiLink.f.theme,control:{type:"radio"}},isOptions:{control:{type:"boolean"}}},args:{items,isOptions:!1,theme:"light",themeLink:"dark-underlined"},decorators:[Story=>(0,jsx_runtime.jsx)("div",{className:fonts.IZ.className,style:{backgroundColor:"#f5f8f7",padding:"10px"},children:(0,jsx_runtime.jsx)(Story,{})})]},Basic={args:{isOptions:!0,theme:"light"}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    isOptions: true,\n    theme: "light"\n  }\n}',...Basic.parameters?.docs?.source}}}},"./app/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ET:()=>next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_300_subsets_latin_cyrillic_display_swap_variableName_robotoLight___WEBPACK_IMPORTED_MODULE_1___default.a,IZ:()=>next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_400_subsets_latin_cyrillic_display_swap_variableName_robotoRegular___WEBPACK_IMPORTED_MODULE_2___default.a});__webpack_require__('./node_modules/next/font/google/target.css?{"path":"app\\\\fonts.ts","import":"Roboto","arguments":[{"weight":"100","subsets":["latin","cyrillic"],"display":"swap"}],"variableName":"robotoThin"}');var next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_300_subsets_latin_cyrillic_display_swap_variableName_robotoLight___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"app\\\\fonts.ts","import":"Roboto","arguments":[{"weight":"300","subsets":["latin","cyrillic"],"display":"swap"}],"variableName":"robotoLight"}'),next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_300_subsets_latin_cyrillic_display_swap_variableName_robotoLight___WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_300_subsets_latin_cyrillic_display_swap_variableName_robotoLight___WEBPACK_IMPORTED_MODULE_1__),next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_400_subsets_latin_cyrillic_display_swap_variableName_robotoRegular___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"app\\\\fonts.ts","import":"Roboto","arguments":[{"weight":"400","subsets":["latin","cyrillic"],"display":"swap"}],"variableName":"robotoRegular"}'),next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_400_subsets_latin_cyrillic_display_swap_variableName_robotoRegular___WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_font_google_target_css_path_app_fonts_ts_import_Roboto_arguments_weight_400_subsets_latin_cyrillic_display_swap_variableName_robotoRegular___WEBPACK_IMPORTED_MODULE_2__)},"./ui-kit/basic/UiLink/UiLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UiLink_UiLink,f:()=>UiLink_options});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),utils=__webpack_require__("./ui-kit/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/basic/UiLink/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const UiLink_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0,UiLink_options={theme:["blue-underlined-thin","dark-underlined"]},UiLink=props=>{const{theme,className,href,target="_blank",children}=props,stylesTheme=(0,utils.a)(theme,UiLink_styles_module);return(0,jsx_runtime.jsx)("a",{className:classnames_default()(UiLink_styles_module.item,stylesTheme,className),href,target,children})},UiLink_UiLink=UiLink;UiLink.__docgenInfo={description:"",methods:[],displayName:"UiLink"}},"./ui-kit/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>checkTheme});const checkTheme=(theme,styles)=>theme?styles["item--"+theme]:""},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/globals.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*  light, lighter, medium, dark, darker */\n\n:root {\n  --color-white: #ffffff;\n\n  --color-gray-10: #f6f7f7;\n  --color-gray-30: #ececec;\n  --color-gray-35: #dbdee3;\n  --color-gray-50: #c2c2c2;\n  --color-gray-80: #6c6c6c;\n\n  --color-black-lighter: #2b2b2b;\n\n  --color-yellow-darker: #d3e35f;\n  --color-yellow-light: #f4ffa3;\n  --color-green-light: #e0efc1;\n\n  --color-blue: #3a3ae7;\n  --color-blue-gray: #def2fa;\n  --color-sea: #cbfdfd;\n\n  --color-black-opacity-1: rgba(43, 43, 43, 0.1);\n  --color-black-opacity-7: rgba(0, 0, 0, 0.7);\n  --color-white-opacity-1: rgba(255, 255, 255, 0.1);\n  --color-white-opacity-2: rgba(255, 255, 255, 0.2);\n  --color-yellow-opacity-1: rgba(216, 228, 122, 0.1);\n  --color-yellow-opacity-3: rgba(216, 228, 122, 0.3);\n\n  --spacing-blocks: 25px;\n\n  --border-radius-chip: 16px;\n  --border-radius-logo: 10px;\n  --border-radius: 8px;\n\n  --height-header: 70px;\n  --height-footer: 70px;\n\n  --box-shadow-flat: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  --box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\n\n  --gradient-sea: linear-gradient(\n    to left bottom,\n    /* #e2e9b3, #d4ecc0, #c9eecf, #c5efdc, #c6eee6 */ #eee5fb,\n    #def2fa\n  );\n\n  --scrollbar-thumb: rgb(137, 137, 137);\n  --scrollbar-track: rgb(207, 207, 207);\n  --scrollbar-corner: var(--scrollbar-thumb);\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: 0;\n  line-height: 1.7;\n  font-size: 16px;\n  color: var(--color-black-lighter);\n  background-color: var(--color-gray-10);\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n*::selection {\n  background: var(--color-black-opacity-1);\n}\n\n/***************************************************\nSCROLL\n/***************************************************/\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n}\n::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner);\n}\n","",{version:3,sources:["webpack://./app/globals.css"],names:[],mappings:"AAAA,0CAA0C;;AAE1C;EACE,sBAAsB;;EAEtB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;;EAExB,8BAA8B;;EAE9B,8BAA8B;EAC9B,6BAA6B;EAC7B,4BAA4B;;EAE5B,qBAAqB;EACrB,0BAA0B;EAC1B,oBAAoB;;EAEpB,8CAA8C;EAC9C,2CAA2C;EAC3C,iDAAiD;EACjD,iDAAiD;EACjD,kDAAkD;EAClD,kDAAkD;;EAElD,sBAAsB;;EAEtB,0BAA0B;EAC1B,0BAA0B;EAC1B,oBAAoB;;EAEpB,qBAAqB;EACrB,qBAAqB;;EAErB,0DAA0D;EAC1D;gFAC8E;;EAE9E;;;;GAIC;;EAED,qCAAqC;EACrC,qCAAqC;EACrC,0CAA0C;AAC5C;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,sCAAsC;AACxC;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,wCAAwC;AAC1C;;AAEA;;oDAEoD;AACpD;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,wCAAwC;EACxC,mBAAmB;AACrB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,yCAAyC;AAC3C",sourcesContent:["/*  light, lighter, medium, dark, darker */\r\n\r\n:root {\r\n  --color-white: #ffffff;\r\n\r\n  --color-gray-10: #f6f7f7;\r\n  --color-gray-30: #ececec;\r\n  --color-gray-35: #dbdee3;\r\n  --color-gray-50: #c2c2c2;\r\n  --color-gray-80: #6c6c6c;\r\n\r\n  --color-black-lighter: #2b2b2b;\r\n\r\n  --color-yellow-darker: #d3e35f;\r\n  --color-yellow-light: #f4ffa3;\r\n  --color-green-light: #e0efc1;\r\n\r\n  --color-blue: #3a3ae7;\r\n  --color-blue-gray: #def2fa;\r\n  --color-sea: #cbfdfd;\r\n\r\n  --color-black-opacity-1: rgba(43, 43, 43, 0.1);\r\n  --color-black-opacity-7: rgba(0, 0, 0, 0.7);\r\n  --color-white-opacity-1: rgba(255, 255, 255, 0.1);\r\n  --color-white-opacity-2: rgba(255, 255, 255, 0.2);\r\n  --color-yellow-opacity-1: rgba(216, 228, 122, 0.1);\r\n  --color-yellow-opacity-3: rgba(216, 228, 122, 0.3);\r\n\r\n  --spacing-blocks: 25px;\r\n\r\n  --border-radius-chip: 16px;\r\n  --border-radius-logo: 10px;\r\n  --border-radius: 8px;\r\n\r\n  --height-header: 70px;\r\n  --height-footer: 70px;\r\n\r\n  --box-shadow-flat: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\r\n  --box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02),\r\n    0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\r\n\r\n  --gradient-sea: linear-gradient(\r\n    to left bottom,\r\n    /* #e2e9b3, #d4ecc0, #c9eecf, #c5efdc, #c6eee6 */ #eee5fb,\r\n    #def2fa\r\n  );\r\n\r\n  --scrollbar-thumb: rgb(137, 137, 137);\r\n  --scrollbar-track: rgb(207, 207, 207);\r\n  --scrollbar-corner: var(--scrollbar-thumb);\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  margin: 0;\r\n  line-height: 1.7;\r\n  font-size: 16px;\r\n  color: var(--color-black-lighter);\r\n  background-color: var(--color-gray-10);\r\n}\r\n*,\r\n:after,\r\n:before {\r\n  box-sizing: border-box;\r\n}\r\n*::selection {\r\n  background: var(--color-black-opacity-1);\r\n}\r\n\r\n/***************************************************\r\nSCROLL\r\n/***************************************************/\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--scrollbar-thumb);\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: var(--scrollbar-track);\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background-color: var(--scrollbar-corner);\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/basic/UiLink/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/***************************************************\nTHEME\n/***************************************************/\n.styles_item--blue-underlined-thin__RImJX {\n  --color: var(--color-blue);\n  color: var(--color);\n  background: linear-gradient(to bottom, var(--color) 50%, var(--color) 50%);\n}\n.styles_item--dark-underlined__cojv9 {\n  --color: var(--color-black-lighter);\n  color: var(--color);\n  background: linear-gradient(to bottom, var(--color) 50%, var(--color) 50%);\n}\n\n.styles_item__g3cAj {\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: 14px;\n  text-decoration: none;\n  background-repeat: repeat-x;\n  background-position: 0 100%;\n  background-size: 0.5px 0.5px;\n}\n","",{version:3,sources:["webpack://./ui-kit/basic/UiLink/styles.module.css"],names:[],mappings:"AAAA;;oDAEoD;AACpD;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,0EAA0E;AAC5E;AACA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,0EAA0E;AAC5E;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,2BAA2B;EAC3B,2BAA2B;EAC3B,4BAA4B;AAC9B",sourcesContent:["/***************************************************\nTHEME\n/***************************************************/\n.item--blue-underlined-thin {\n  --color: var(--color-blue);\n  color: var(--color);\n  background: linear-gradient(to bottom, var(--color) 50%, var(--color) 50%);\n}\n.item--dark-underlined {\n  --color: var(--color-black-lighter);\n  color: var(--color);\n  background: linear-gradient(to bottom, var(--color) 50%, var(--color) 50%);\n}\n\n.item {\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: 14px;\n  text-decoration: none;\n  background-repeat: repeat-x;\n  background-position: 0 100%;\n  background-size: 0.5px 0.5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"item--blue-underlined-thin":"styles_item--blue-underlined-thin__RImJX","item--dark-underlined":"styles_item--dark-underlined__cojv9",item:"styles_item__g3cAj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/layout/UiLayoutCards/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_gridContainer__vAJrX {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n\n.styles_gridItem__sXO4m {\n  position: relative;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  /* background-image: var(--gradient-sea); */\n  background-color: var(--color-white);\n\n  .styles_logo___iDR_ {\n    display: block;\n    width: 100%;\n    height: 250px;\n    border-radius: var(--border-radius);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-color: var(--color-gray-10);\n    transition: 1s;\n  }\n  .styles_logo___iDR_:hover {\n    filter: grayscale(120%) opacity(70%);\n  }\n}\n\n.styles_gridContent__r2LCY {\n  padding: 10px;\n  padding-bottom: 5px;\n\n  .styles_header__2Ak7a {\n    margin: 0;\n    margin-bottom: 6px;\n    font-size: 16px;\n  }\n  .styles_description___7JrY {\n    margin-bottom: 6px;\n    font-size: 14px;\n  }\n}\n\n/***************************************************\nADAPTIVE\n/***************************************************/\n@media screen and (max-width: 1100px) {\n  .styles_gridContainer__vAJrX {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 820px) {\n  .styles_gridContainer__vAJrX {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media screen and (max-width: 570px) {\n  .styles_gridContainer__vAJrX {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n/***************************************************\nTHEME\n/***************************************************/\n.styles_item--light__IfEEI {\n}\n.styles_item--dark__r1Fxd {\n}\n","",{version:3,sources:["webpack://./ui-kit/layout/UiLayoutCards/styles.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC,2CAA2C;EAC3C,oCAAoC;;EAEpC;IACE,cAAc;IACd,WAAW;IACX,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,4BAA4B;IAC5B,kCAAkC;IAClC,sCAAsC;IACtC,cAAc;EAChB;EACA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;;EAEnB;IACE,SAAS;IACT,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;AACF;;AAEA;;oDAEoD;AACpD;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;;oDAEoD;AACpD;AACA;AACA;AACA",sourcesContent:[".gridContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.gridItem {\r\n  position: relative;\r\n  padding: 10px;\r\n  border-radius: var(--border-radius);\r\n  /* background-image: var(--gradient-sea); */\r\n  background-color: var(--color-white);\r\n\r\n  .logo {\r\n    display: block;\r\n    width: 100%;\r\n    height: 250px;\r\n    border-radius: var(--border-radius);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-color: var(--color-gray-10);\r\n    transition: 1s;\r\n  }\r\n  .logo:hover {\r\n    filter: grayscale(120%) opacity(70%);\r\n  }\r\n}\r\n\r\n.gridContent {\r\n  padding: 10px;\r\n  padding-bottom: 5px;\r\n\r\n  .header {\r\n    margin: 0;\r\n    margin-bottom: 6px;\r\n    font-size: 16px;\r\n  }\r\n  .description {\r\n    margin-bottom: 6px;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n/***************************************************\r\nADAPTIVE\r\n/***************************************************/\r\n@media screen and (max-width: 1100px) {\r\n  .gridContainer {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .gridContainer {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 570px) {\r\n  .gridContainer {\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n\r\n/***************************************************\r\nTHEME\r\n/***************************************************/\r\n.item--light {\r\n}\r\n.item--dark {\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={gridContainer:"styles_gridContainer__vAJrX",gridItem:"styles_gridItem__sXO4m",logo:"styles_logo___iDR_",gridContent:"styles_gridContent__r2LCY",header:"styles_header__2Ak7a",description:"styles_description___7JrY","item--light":"styles_item--light__IfEEI","item--dark":"styles_item--dark__r1Fxd"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./ui-kit/surfaces/OptionsElement/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_container__Z56wH {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  background-color: var(--color-gray-30);\n  border-radius: 50%;\n}\n\n.styles_button__83tXV {\n  width: 100%;\n  height: 100%;\n}\n\n.styles_icon__QDqun {\n  color: var(--color-gray-80);\n}\n\n.styles_link__OjhAy {\n  font-size: 13px;\n  background: none;\n}\n","",{version:3,sources:["webpack://./ui-kit/surfaces/OptionsElement/styles.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB",sourcesContent:[".container {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: var(--color-gray-30);\r\n  border-radius: 50%;\r\n}\r\n\r\n.button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.icon {\r\n  color: var(--color-gray-80);\r\n}\r\n\r\n.link {\r\n  font-size: 13px;\r\n  background: none;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"styles_container__Z56wH",button:"styles_button__83tXV",icon:"styles_icon__QDqun",link:"styles_link__OjhAy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./app/globals.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./app/globals.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);