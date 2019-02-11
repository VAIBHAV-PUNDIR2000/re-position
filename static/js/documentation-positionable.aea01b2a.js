(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./documentation/Positionable.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return E});var t=o("./node_modules/react/index.js"),a=o.n(t),A=o("./node_modules/@mdx-js/tag/dist/index.js"),r=o("./node_modules/docz/dist/index.m.js"),i=o("./src/Positionable.tsx"),g=o("./documentation/PatchedPlayground.ts");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},A=Object.keys(e);for(t=0;t<A.length;t++)o=A[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(t=0;t<A.length;t++)o=A[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function s(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=function(e){function n(e){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=m(this,p(n).call(this,e))).layout=null,o}var o,t,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(n,a.a.Component),o=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components,o=c(e,["components"]);return a.a.createElement(A.MDXTag,{name:"wrapper",components:n},a.a.createElement(A.MDXTag,{name:"h1",components:n,props:{id:"positionable"}},"Positionable"),a.a.createElement(A.MDXTag,{name:"p",components:n},a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Positionable")," doesn't provide a container or transform handles. Instead it\nprovides the current position via render props. It requires a bit more work\nout of the box but is infinitely more flexible."),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"example-usage"}},"Example Usage"),a.a.createElement(A.MDXTag,{name:"p",components:n},"The following is a simple example of a implementation that only provides a\nsingle resize handle in the bottom-right hand corner. Positionable does not\nrender any of its own elements, so you have all the flexibility you need\nto render things how you see fit."),a.a.createElement(A.MDXTag,{name:"p",components:n},"A more fully-featured example, with complete React project setup, is\n",a.a.createElement(A.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codesandbox.io/s/j3j31kz0zv"}},"available on CodeSandbox"),"."),a.a.createElement(g.a,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAAVKHyHtUFcDxYDdE12k9OABHISQYLggYEKQmB_QFe1oKgVxEhSIRQgwFC5TQ6RTlCa8CGiPDsOichNnQKCyIoqiMCIyD2CDKVaNNLV2nBVBdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYZMZiwdp9xrGZOxYWd9IAFlM9gADZTPM9YwBAgAxH1oESfT-GcQ5EUdTB2CgoR-CWIhqFgqzETcmsPJoZwIHky52AARjsiz5CkmSpgAQTmNT2EjYANmgdBw3YeROTUsRSpjGR2FRFSYG4YBD0U5TsXkbda2ATjKuqgAyEbxkSeZKGaIaoCq4JuEW-UwGoqU8PadgAH4Krm8NIzqq5Zvm1BcprKQZGrd8zFhDVjhgMAwigKZ9vqxqzqKlca0TESCBwTzMhSZj-trOscJePDENgVcQa6fJ5MhpkvpB_tYPB6gOs0pHkfYWAwAIfSDIAUgS7GQYiGYCeJizSdrTYIBSQh9IAJgAVip6HkdxdAJmZtmSZpycRFY6gCcwFJ-ex-RTux4HkeAMrJzoadsjB-Cli6MAAAlKlgAQ7Fq17oyx5HY1YDnsY1jqNe1jBdbgD4QNcNAMmlgWLFa2AMfN0mWDgclyP0tAoGdi0kNObYJbdlHcJF8SyJiVhCOpqOLC5nnFYjLpuNR-CcDTvBk5TumGfxjPlezmPUHwGB6cIQuo48SVtkotoMEcKBhX0gBiLt0Ejmmpe9ixZZpxg_fcMRNYXDuAEIpHH1AR9J02h-Ry3gGtnWMntuAYHFOGYFdlOPfa4BMZTkGhUr_TELgSgoHCJPV-xrwbkifSLRZ1z65T_oS4_r-Zkf5R3zvpDKBlv7P2RsXRm8pwGQONm7RuOwW7UXQO3Tu8ou5gAMgZfuAtB6IORluVe504ze05EfWsUhVYQwItWDmK8iEny9kQiwvt_Z-XlEHEOYcdj4JBqA-UrN2ZsN8DXf-wi-bAJBtpXSAAZe6pd2gZRgDaGRtZkHN34ug--mD2g9wAOzoGMYYgRNUqHD29gAOWoBaWhvYCLHDYIw3cshVxSB-n9AGQMYySA-pdMw34QAYSwg4_CsAcAEDgFgICuhQIGHAsRW6RgQh2B-mJBU5pBIkQ0uwZwbx1BbCmPITJAgsCaH9HaW65UWLbBgAAVRoNAGqZSKlwEkJQOE0RhRwByTU1c5AzS0AKgkfUvwYC6g8LvAQrAEb1yGRKWg2oMBTJmXMgiCzhkwAANIwESF4VwAh0DjMTmsjIGzYBbKWXveAqVJnTIufMwZ2zRRC1oOc2ZzyTqZM9JQR5XyCJ9NVKgZJDpyrhNacaOinplLzGBdU8Fgz4i9Hjrcg-nzLkwEcKgSAKQ4ALJRaENFbyWIfIBVinFeKCWrlsJ5VaatVz_KKVKOABUujngAI6hHiPXTIGBIhKRnCkHKvzJDhGgB0ogthyBVJoJNbo4SEZKSyCVcJILrpYFyWgWgAgHrBSVQRcKXS7Dn1rMYUwWNUnOGGMSnI8QoBGgZRDYOyl2CBGcRUAi6BtrWFsP2QcGQ3V1PgNDVJA4tjZARN0CZRxijRSxcUJYxRYapQRkmkINEU3vPTTgMNfIka-wRj6q4Xh74SlQBqpGFqw3sDvHdB6xKCBLAgM0eNvx02cDsMUNEjIM2v3xNFPItIcj1IOZQI5OQE1qP0LWo53Q6DFvqH6uwA4ukhASKMOwY7DnHNDpSKdEzmLDndd0It3q81WoLSDc9sA9njsnacmdNBNqluEBSStUkQY1qtewfUajAh6z2M0CY3QKjHlSFRGY-ZoCOths6dAtaIgwklPiEQmwBDtDsFVVwc5KjHEHDCRONB7b5tXKgmYr6WpogKFW79Jh8m2rmuwBNBRT0wgidkbavJVwJoRlRstH66PmoY_YB1WiT0_BiGAZIIxNjmHCWxvwdhOLuDSDkHjSNqANJmOgLIVHIxwwKFccJdVuANVYJQLgwmLAWocH0cM0Ec54TY5GXGzbhwzCWPnJYMCPNCDJXhOqmnL7Odjuqr9InUnikzmFQj8RdUIQTt0ZDeQ2OlBsLtOgxR2AhdrFODIVGYvTjEwkLRNn2B2ecAhaDOG8M0VTWlE9MwIA1CgHYaaBJ_U6qeVAeoeX3Y1csJQKjqAmKAYq1VpjORGtsY9Yu713Hr35bufDAiAn30Vsmwxm1bRmMBeFuYebnGfW5eWxYA7LF1tvvLe4EFp0zBwu6MVjIpWoASfUpGI5-KrgvYEG9rR7L8VmYagAKWcAADRwJeZ9BAq03QdD1vVkpntK1e-JpuQPTWrgK1ncJJmwufqRpvW228CeVwRgAbQVFrLeet2gAF17tSQR1McgZE4B2ENchbAoF0DpK1Dgdc1B9CMFXNzmAxq7j1wlyq2gZgGpmosDMN4wdyDUdYurzAjanpS7sOpJXa9VsIyuJThn9d5AVZV0hWIitOzUCSBr2g5O0acblzAK3_Q5m0EVrT0nQGDfe3iU7F05ZhKC8WVkcUYBGCa0sPqeRMOgb7Qst7dAGBfsR9efdWP8fE9Xn0I2TkqeiEulJVkTP5oPjZ5j3HhPSfC8p-9rvcvzvw9V8j7QaPuf68F5oEXjRcARit_Sl4zvtza954b_3pvpfh_vNH1nm53e6_59hwPyL2NUD73uZXqU1fl859X9PggG_S_ot3-3_f4-V9T776f2fNML9pT379G_R-7_r8f6TFvq3F8d5rx7zX2T2L2bx3xfyvzf0AOP3vzPxpiH3AP_2v2gM_xAI0WHz_1fwPyjw_17y_1ALn0QKwPf0nzwLQNXEt03wDTYFVXKDREoESAABISoXQxgCkPAWUCBGBLMuAi8Kt8p0QpRhRIw107gXd4IEY9c6pDcQYGQ4QRDBw4BPxvYJhbAcBURVUDd2AcAdDRD7Yr5XcaoQUQYHskZrc1ciwMx9BtQuBxlqICAXoZDaxVD7YPBQhKp2C4AhkIAZh4I4B9pjDaxTDL5VdbdPgNwaAAB1WDJpIdGgRwlQwkHAOgoQJgnAF0LABw5QpGYIqLWtHTPTH3BkaZbw3wvCOwfDJHBCR1SFVtAkboPQjYNTf8MjMw0I9XcIkXGgGw9AAorIBQmAVgPXcQuhWAKQjSb2OoyMZlYpNlDlbleISMFwnAPQskLoIYxQzkaQqBLoAgPoInAeKgkGfKPJAwtWbQnQ2GEpEqZYvQwI7GE48qM4vCK4CNIYwnJYHQlY9Y_ea49SN4vXCrEGKYmeGY1ldlGALlHlKAEQj4gNQY0zbYsRCwZY3eAgd3JYpIvQlYwnbIw4gMIhEEsE6JCEqExYq4tYwY34rYiY5ErrVw9wuaTw0ovwgI72KhXI5XdosuKMJEmmR4naY6dWNHI4UpdSW4xQoE2sE4qyTnFWRQzPTOAHTHHSfXWk3-EUlWQnK4VEslGADRGGe6G2dAO2HUpIknE07eDRSggkmmKYulZ1agSMXHGkpwi2McfYnkgQEQ_wXebiTY-45GTk5Ge0uAelaSeCSMI6cMV0nYj0gQcwaMugH0uU_0k1PE0mYMsmPAIQMYVg9gc8AQIQb0qBdoCXFjPIKYLoRENgboFNEUnLYUdgDLYabLNJL01YMrJuSSIhDMiwYMn9ZGVJN7Zs7TXTfozkHLUQzgZoZ4lkZTJo2cbIS9Ic87ag73boPwUnPon3T7EHdU0mKYqBGeCUk1HAMcwo7oAAHyvKgWJLmMhIWJhN1KyCWFPLuBxMrnfBpj5Kjl2P2MDJMKOOcKxMUPPNQB3JgExLUI0NoD7KMKoMHJBlSWNOQmKK8P6A8DY2Q3w2onQu8KwtnDEkxQRlIyvVXAHBoJ9zcI8LeAwp8NZN_IeOoFkjdORlvWyANNrA4vvV3ROSPX0C4osD402TjLhm-V_hzVErpLgCG0oGtJuNApNUAulJYqmHKnc28y4ELDFPpPUL1JUosBOIo0UrUOxJMpvMnEqEFRo1nDZNtNJmWJSIYMYPSN53ssmOaEjA4vQCYoFn_ITMMpqmAosBBOWItLtgdhoBDwyA-Ac30D8ppgCoOMzJCpnNKhEtgEStJnHxWXQBIoIjKigRBgXFhzNLUIiu3iipYmdgEDiqLMEuKtrAoyEugS3kQCauxnCqNLp3tnT3QHqsc3YBvM6uRm6r90tL1mqpirqt6AapoFatkLktatqlGpWJ8KgpDSaRiGfKSOcqYK2LWvwswqguyKgXH1GSgCfQKtgCKrpJKvv3KvtkqqmuD1qsGsavuuaqg0WtrGoHXFgDb2WK3MtMgt-vdmmxxUThFGGyggyERBoCuHcxwDQHZ1CHKCfGJgIJTlWq-osHWvmCWNcHqW2ugGgr6vgHoIOu_IvnxuOogECEjFYMcGFH51elRLHAxOZuEGOSULOrpJBJ4v2T4qfWYmyrdnH14onWOWuopQRjutpuxlKuYierDB6v93tjetDw-oWtGpBn-qdEBvSmBq3jBr1trDgEhuoGhoIFhvhv0CRqURRukgfgxvaCxvBpqhpsVtrAJs2uJsaWaV2rUP2sYMOrxuRnULooIqgu5tZv1wag5vRL1KZpgBGBZt5q2KCqAqISzNrCmMawRnFuRhOMaweXWQRipXpjVLiCgFRRwIxTloIirvxQ8rpLLpuuxWoGpRwA8gEHPFQyjO7vplejYv5LUumFJ1MuevVsmrgEp10DxTVomt1msR9BgAZx1rhzSrtK8pnhBqyoPJ9ou3jJStprzoluz0borsKrHqjmVodr0pes1sdnermscxnk9pBgPv1PNosANr_CBqSJ_rNojrJi6UOmHpSCiS6S_vy1rlLkXvpjDAQbgYsFfgiCIEgdxWQYwciDQZxiUWwaXs0r_paittQBtrtswkfvzmdrRrdo9rIdktmGG09txuPt9pa0Jq2qDvJuSMptSLDu9uPqjpKJOtTpGEhXMz0rRK5rTsROzqCPgpzs8tKkuyLqPoFlLoX07pbprqJRJV0abtgH0bbskr1L0agftj7oHs4iHpwbnBkbvuYtQFkh_unuXtQu3gXqga8bpzXuPE3vfv0ClLdhBJ_uLo1L2MCtGovu0deWMZvtupcYFgfsRqftnsiq1tipCZoE_rIZ_oIYAfJDHGNuAdNvHNoHYZEZ9r9qJpJr4acsEZcvDs4bpujokdYNbzwnZqSLkZTu6feSCxUczNGf7IoLMFMNZwbUeicwpwIhBWCUPCYn0EO3YgIE4hVl4lQQwCiS0AoBAn0AYDBSmEcEwH1AgCLKbOhXlCBGlWucwxBVObyR4nIl2ZyFKVufaC6jlXOZgEuceYEZ12iRwD-DTpIn1G-zQBKgaBwdBWUnhy1Vum1zmbCh2Z0SWaUBCUwk6RMfgEkFUGwH2biSObAhABmdSW-c9AdSfX9EpbFX6vpeRYdCpfdHoh3Wlv4sTmZdyTZdQk9DLt5ZSTFUu0IixeUFCUkCe3tmiVJb0HJZmaezCkJxKgKjgCFQKDgEYHCWsXG23jEBBSVYVRVcrj1aIEAzVN1DADADRPNctfYHGhSjSnte3kdeEmGeoFdYECRdyWVetdtbHAKgwGde6HUnVc1dnG1YDbRODfQFDe9bgENc1T9ZNZjaDZDfuUTZKnTYIGzadazf1b1l9dun9ZtbRLVY1dsvxUYFzcTeTYyO1T0GR2CjraLexyRncyuDGwtYyEDPJm7aLeZwJJmaR31W6ATfba0b80Hd7Z9dXCER7YmymZZxZfHGbfHY9cCy9aLa0cuxeOo2FWHZTdujHZR3YGDaxBgDjZsI0OkhgGzcNzU1gFneXcLVsBYnvdfb7ZXZHbXYmnmHDwPm8fkVOEOzUlXCvPlFQB7JBig_aBdFg9rHg8Ikg_lF3iQ4sHg76TQ6wxGEw-GvlHw9w9QHw6rUeHYAaR2vBlDUbdLbTelS4MsCWB2QanUigliG2EYGY4LKwAYZgEYDHU6x49Y4beVYjere1csDY7yUpygk4HMCE-aEsAZyuFRGFQQtQGCSlYlXa0kGlS8JJe0HiWOaSSEnKlzaWDbbnYJSA_uRA7A_gihXZZ0OlYVQRQJMHOHMMdVVA0zSvdPQIBGCCHMCC5HCFB1XthXM0xmZOOfZgBvDHGC7oBgki5KkjCwAym_YECWESCy_YCXYyH3KNhBiwCZmy_rkSHK4K6LbMGK6hYmBwGiHcCZkjCq_YAtBaAyiWDK46_YEy-C0ygAA4DI6pJA_1og8AcAoIGhyOTAihvO67iVfPNhPVP3gpAgguQvxgRhwurMSNouC1YuJ7fZ1uEukuQvUuSN0vMuKuuvsvivVwyuKvVwqvsu6vR7BkJ6sAbCbWSpevOvMvAyTjEhfvmh1J2vOu8uKtkqJvGu4BOURQMuwfct-uUeABqFoFH1JUH1tMAbIm0swLzx0QUedOwZDe8k9XeboOo0DK59gOZB-eAEILoGEJ86L9gXUVAR3cIsnkIFqAoZCWAROPrBbhb9gAAASskyDlFcHYE8iudkmJPF6l6OR9HdXyS2GoByGV_MBi__ZOPvNJKfPS9cCuGACUHdXN4NmcdXAo_sG2RZ8yESA61nMDRFDbHXrgC-7camFcD1xzY4OKVPDHF1BGFQClyDUSECfgC-3gpOI8AD_UimU4JD4IDD4j_d-Uhj_8I8H5u_XG8hEK6OE61EKDQgGZ_9RYBtYuF1urXG8p_nQK5EDZ_cMZ9nSRimP97AtgFnELBniWkT577oBSAmGLth4enaw90mYcosD7tKhlMI0627_TK0YL8aGaEZ8ZFd5anXoDS6Sj5Z-6Ck1b95W9go8b9Z5P5gG5RoN79EEJK8tcEp1EIZ3YAH_Ug8Bf8HAZyiZWxifMCT9d4QVDkohUL7NBguLGTsDTymAuEjQRyJYJf26AyQuAFwHIDfzb7xAO-hpAAeMHRDT8Toc3S1KjyhpBoCuadTnuWzHAno5ecIBGixDSDAZM0pUaXglRhD35DuJ7B0CcV0A21c21DegbqAEAcc2sapErhbQoZUNKAcNGhhk0EwVp64rAjJjAVhwfcZG0xKgaXGs6WtOQVwXNvVFXCW09suiShkGgEHYDSY20VJhYC7bNlGCG8VuI-A0GBtfo7mSrP2HnQ0Bzymg6ItzDwCDdwEo3eQITCTRNUB2dghwWgkjDOC0SMDaDONyUG_RpoLgqeAgwCG4JKEIQripYlrDm8mqtg4oPYJ0QxCxwOAdzJQlMihCvq4QwoZEIwAlDfo5MCoVgCqFuxCeqAYntVlmCSBfi_QUSA6iYHuA9gQfJUHYB7YZBYg4vLfsz2QxEAm0PhZCMvxq5ztOBdHbgRPRYYzAU-xSAAGrxBt-6XTYcNlGxFt9y3HGEJkSVimo-o4g0KqgBVylxLAdXK4JYE-6d896RwygOP1PoKcHhgZYMrD22H74x0_hNAA8M5Bq10AoQRELcORhRkjk8IHLuwDHT7lUmJxMEeED2FM8SoGIggJTjHRM5zqE9fYA8KxGMgIOEdJ7J1lxFkiw2S0BDkWwI4-1toxQmkfsP1ItQ5KtTRWlcDZFM8wmRuXAUCN-i-l6YqAMqJbziBFkK-SI6wbWHxH7JVOewcIKSPZErVxmNUDRBb3bJPCkYBPKtGe1bb4sW6e7LJhkBj5qdq2_bCBu6k2x3YccCDG7EJlXB4MsGto27GfUIZ4wnRW2X9mYBOKihzwzgBoAAC1zwAAfU1gFRrE2oRPOGPkS6h7ABUSwA0F1DWJnAmeYDlvFA5xB4IZuEqJTlXAIdI4CHJ-EjHaBliQYWGSsbWCwwlih8JY_DvXAQ5NizAhIzzvNz17sAAA4ukEyC0AVMUDPoOB2mF2Bh0K0R1PPxopzQ2MZdYYck3gAc99GR_d1IyWlBNlFQ-IfIKFHwxUAEyGQUqENyLCOM7AMLCICxCgAQiFuR3A3hPVrr10u8f-KxiePS6rgf6OYw7PcDs5pQHOuYvCPmPUiBjgxYYyMdGNjERiExSYlMWmOcDPDOexoqBgBNljvjHO5RHAFEBmDeUrmxSXpuoLYovULREQlgNWXgjyBECrQxyjaO-CSAoklNLCSRKCwaI_4sCL0DRIHEOFiJOE6gNjVJiuirgkgDpLRNRD0SuJH4DRLYMkAjA2JdEziWtG4kW4s6eUCeqKF1CWBkxEYqMTGLjGQTkxqY9MQWNLHmR0OScdDk2Og74d2xRPTsaj17Gh4sgg4xxsOKc6jjcgu8CcUaCbLTibIc4MVvOKeRAolx1jFcdOPXFHBNxRYfcUcEjB2Rjx1KBTsOAvFXi9eN43JDwJ85d4km_k0xkFL3J6CEJjjJCauBUlqTLAGksCdpMTG6SYJ6E2YCJLknmA8J3sAievSuC1DZJpEkfBRK6pUSOhQkjidhPqk8SLYjoyrDAGknCT2pjE72HxMqyCT2JdU-CENORgSSpJfUhaVNJyKKSOxxA6LI4P57F8aBrIYjAp11SM96gzYLtPCXIA0hhwSwaICxlgjNpxeTMO6NdKiCOoIu13HCjwRyBgAO4rEIip9KrKOC2MGQYsmRTOxcC2cE9HROl2mF3ckcjPbLiVAMg4AMoug5YYBjeHHEYZ8AJtCVAa5Tdih0w9wYjPiCDcyZUAQMrD3R6wwm0MDBXjUEfBMx9RUkYnvYE2A7B0qcvOZP0ARiXS5eK0CMnhFWHHdfeXacMvVPS5gArgyIDGc0H9SSynO5mVcM0DGgaR5AMDSNtA1rowl8eakekZTmJLy9HSqABnHKmJ62SMgqqOXvymtAboZgfgC0OML6GHsCgos28eLLtk2UNOe5AwUjEJlhhrKRAfaN7C1nVtIwyYJyNyLppq4oKLMiVjiywj_IFxHSWlhMiM6HMFWiSCCLkgs74slg7BTgs51QjlJKkzzczquFO6o0CApNKABzOaKLBVZ0AXVPXAwmKCH4OweuEPheCcQoWXmVcLwx2qipvmZcjpAf37G9I5ULzCzpoKs6aDs2XzFzrCnc79JwUwGFwdaxPwlyYUnoXTh0mtBrz1Kx4vgZoPME0AhBIghcPrF-R7ydqUqGVNPI3bntLqstBcbqDKIsUtGFHVfOwNhyuSOwFRd1P4H9Tz8Bh945bn4RXK1h0mpcFQcxEmzjcT8OIYYLvD8mApVIgQDuERWQx-dwMiMdfiZVxAJBFYfsbXienCnoY3W06ZiBDO-ptAKYbs2cIgpNnCyWQyGXWXsHvb88aFroJHOaF6YLlwiRtAakylQAA0ymBmfcj9JYW7Y7U_YLAPuj9IsYJQDILoLQvYy8Cg0eYHCuwEJhMC_OiQgXmlGgUQ1jBpAmGtIPtovofR9ok6FJENHdBX5EyKCORH-k5BDcFGS0UeyZSaC9BC89tsezWHQzxZ6cxOCqhFDMF1I-ZIucUkYDIg-CUM48bJDCWQkMAUS8gWwUKRxKEl9lMWSkrGQTJIKGSmJdkqlCMBnFicVxSpAnToBElf7VKXeO2SVLy6WUsNqVENywL64LVMRRIuqaGDJBZgqxbIKmDil8BOUK4C0s7ofy_CGMzurW00FsdZYqSiJQQFcrcMoKzeAsH3NqkvRbedJE4tOgyWpLil9TUakPLJqpLzw6SpaSnEgBPQowtgf9HO2tbdioMkYCjFsU9rkhoR2wJ8MkLRJvhPaaIdwHADRSi19AsNQnJGC6XkNzF1tIZTIPoExzkY-fKOEcrEb0VGacooyobTKZXA9lDUEpkbUdbjRiVZTb_G0LRVuxYeRykASI35rE9tQI4QxW4tqWQYGFmaHXviw5WhBoMUQTZngE2jXj_RE9J5QBgyCvKoM6XLxUwpSDFcrINSzsJMsKVVK2VnYEHBRXVUDUTKi0dSBRirQnEQVbjcFQJRoBQrK4r4pGLAquDwLPqshQZZYqRWP15BawD8IbBTltLGCeUhcQspcH1tNVWmfFuso2qwjZEtU6yLm38IArQ-YAE_DCvvxbFbl3FD9jXLrkNylyj4ZNcJVqlEjTBIofgcMsEHCDWs18sNVHCMF2oLFttItfasVqwKVingi8PfhnhQIUVDKogeLwKhdh6ii5RgTCyHRoK5yoXEcEMOFD0wYWQM1YXFy7BRr0u463SP4v9XttiuqmJckurtYrrDYhuWwQurQBlClE7ATHmurSAHq8Y9ccIXuqrjkwj1fa_8OTByjZFtOuLT1RgoJb9VM5wEbOSc3M60RzwxGDzJ3R3mmh2kR8vJPctblQCvMLUbYD4UiKZYORPcwVf3LfKzBgNnQdpJ0m6QRB6cBo39ZZ0oHLqbO6G1zjKzA3lQY16fONffiWBeEsBW8-_CRrvmSoGINoCuXnM5GzBhRtIm-dS2Y16cDOsqdjTUg3RXUJk1y9AIwTumqqYAqyqTaJqfTFKSNkgVJeRqrmMRmIdhXeE-ik3qajw-gLTY0hmC6bicGAymsGwFCHZ_oXvOuSPJc76dH5Bo5-cFDyrTLP5bjb-eN1_mwKAF9qIBY3HyB2AwFJCiBfHDQmrgbV7AO1TQBYXIL8wqCmNPiwCALhqAc4XBat3wV29xuRC2DKQoQwULUMewUDEBl4UHdyMUGbxbRjAFRa88f849MOj8388WIOkagfP0HU09m2AiliqYsnqWlbVqBUJtVreRoIGe7I8nqOrpDNtGeBiwkJjNiqGC5KJwudkEvZmO8hhUyVgAuIJD3SFsqkOrLpHqwFl784vfDGoheBAL1OEoOUJ1j5WXkcgw6iGfr0aXizcqqyHlZ9k6U0bytDC-uEUwW2sN5KUzK4K5vxYzLyicy_Fn6rRJLKtGhywYDAGZXh8Ml0Kf9foEjBFN5Q7Wk4OHzfAw8fh7WxHagBDWE1vYEGqMDCquCGbUdNAfcv-DkyxB8QeqzKMXkqzjc3B7OTjh1m56JAVCEamTXJuzUtRtleAfudEPShU6ANqIqBP-DeLWF7oczeyinH_CogukUuXDIdnMZRxDef8NAPEH0HqRKNDG2HAmthzUqBYFHAqOQCoD2EPJRwewM4GcB4DQVfdOUHRqhgHKNhtddpW7smTUbjdsCs3ePXFlHKSoKzTTfDp01nKI6GEqMluTSD_RIgV3GtRLrR3_gOd-gCHEsDT3Bx9AAATVo1e6vlo1OALBpmDwboAUFZTDQCfToAFeVS0te1kF00wY9nYdQJWU8jCguhmEq9XrrnmcaZgw2IvZSNqlSZW0iQeRB-z7H-FPlKKkGIHtJiw8ug3KczaCgFV4RrNx4OAHXMjBHKlgYegzfDp0zybCVo1K5ekrcqZFQ5dJDURw1rCsztp4vUrA-JmGrdTu7gYKLczHU67zAQMw6e1qIzYDNMPAuPTAAT1EAk9w2FPVmE-xMpv9EOF7lpm_256EDshL3e93dXqDxd8O6nQQDmUBLiN-ynGeLPcwZrGBn2bPRXxoAQ4-uV6iHGNxahe7geE9cmKQfaUwqPgOemgLnpoNIH6DPuirCCWV02A8Y96b4bgNSa2CSDIB1quEJYPSH2S_wqgsAeaKihhYJUKQ80XcFyHmiTB0JdMlYOqGewBMybk12mSx6VDwsM3RRxzG7BkMLAXDL2Hay0ovKqM5MG4brAhB9DIBwwwMFJWeG4ABhtQ4wGMhiHPSEhohl6IICsGZDNo7Q0uXcEaH4jDUIyNtESOMDHaeMVg6jwtDdcFDM_LLewBsMnphg_QeSI7CgDOHSogc2-G5iUSsG6oDUao2YbiNpBYyRCWHuEe9GRHojUCcIQZGtKKHZ-rOwo-HBPQ21Yg8QHHD8LYq2D-jKhWI10h6M5F7snarsdqDKYCBpULodKn53_0Llp0OQFmP2Ab0dYjg0UVnjC2RDOIGJ1AJcSAZKiAAsIi-wAAm29R4GePfkgDE9KvQQBr117JcJx9LievSjaDt4gakGIHIR5I9gTcQ1HjCZvXHqQDZ6qYKkhhPlCPDLMVY6j27Vt7UQ5PVbpRrvVEgWVkwXtT5omD3T_UgQNjAcfF5XDcg0GS49HEMIUnxwRIGrPMByDpbugzwY6cX2i7i9rEqk88FcEhCtBoQfgROLys5N1b9AdgSMH8Dl5-digFGKcmryIDY1UkDuZIH53JOkmqTNcIivwqlB5gCw-IRUw9OHTi9iFjqTYVpULADCqFYU-_ESGIiO4PIm6XEERXiCpbp1E9Vve3s701Z513--IBurHCJtaNi2h7obEGQgHwzebdtnBNBMB5FclRyMDPE-GhGEyd6wYz71kh4UOT2QXNgmezaB4iEu60M31jcGInmiyJjRJeqrOwnazS5OIRbn4IbCizOQdSJsO41jbDMXIyMIWdmCcnc2ZumdbidoDoJ7j5ZmmLYM2GcnkTPBiddUXrPzHGFC55cjes6496-sD6ignjtwEBnUQ2QVgysbZnWTUktiaTMkFSXoLoa-J-6XL2BPxT_9w68XguVOAhMZsC4ViFKe5MKdwYfYdrVaFGDmBKNfp8WaPpkwT6TzoeMQbKvU4FBiulG0s1upVlIwTlVTGAK5QyIOFyoLVDeRW1qiJypWr6rFB0k5aPoM5crYzmSxzkzzxgAoA8UvNLmgbhN68snUiPblC7e5Iu2YKhsaY7V0NY8rDdbJw0edEUx8lM7xuXlud4U5Goixm3jb3IjdzEWjapb93HpWLu88VPfNY2KWtFBas-bWovklrRBTGvSyxsE2KWx0hOuAPJrHQ6YHLymmy05t1Sbspa1Fs5KDvc0dsHqZVGrWQUG1aZxFeK2gFItegyKBl8K_NTWudVyC7RROUwhR2sDwBugVF45MiP2R2A6ZT0eKaBjQWlbQWoq8WQVFFAqTIi4YnZOeFz3hjtQDQQMfYGgnpjze7ASnESywCVbZwSomS60lnO1h2UuZRRF0Y0oRGcjb5G0UZCUCrghrowUUCNLGtdHuunmK4NNfrhzWRgOmNq7McmuMKcjmo2a9cxGCE6drER_o6tcyiHXCBSk8WbYE2v3p0u6ULy8chwPgnawwonACCMjDlXKr1V2q_Vcavnhmrek5wBCM6vWt2DKI9_ktByOGr_Tx1wnRkrstgWHL9TLi5GHuvHXRD2ROLsdaP0lQnLdwYnVBQxtY3cyONrE8OTW3mAgNrJjjKRQIy4YLQlQK0IOBO00Qzt0SfnpdvV43bsL92wnI9pSm3QeB2yF69y1aVvr0un22HPXHJX9KkYlauaNWvPmjK8BjICZewAltvy2lYOliu9YsAIjRgSNqPTTAo6RFCIrPXoCrqIAWgD6s4mAPMABlzgzTTW5iyX3xak6W5UYMNg1Bnj_gugzt3AyXnNvjdxQwd3IEHWyuJA-VWyvi6Lr9tr8cqE9MdBHaWQZKYgx4b0hdaZgZCzbitC5TCWNtbXjNTe0mC3q7DDZc2MKrPYmvLvYwY9ZDIy1RpcFq3L5Jx8tZw2VsmCpBCVp6WA1JgNrEhJ-VtYPYsCz7SYk9iewKJBhp2nbGdzFTHQVqK1hF-K0qPuQVvdB1ZW9ylQQnn3ulcB894O4wXpWrhGVO0i9l2DsAZR9FkYcBPorqKW1W0bJ-EqmTqgAXCTy_cwL_JPzi8zxr-gaU506x-c8mBAJIBaAjSpkneowGOwKeSlJKZ16Aau5oKtUlUrgEtnA_XEi3RaH-xXPA0RodaEHVK4syjXG1DYlQyHmbNKGpdT2JrdDskDFGAFcVDUezml-NcPabWj34-xIl0P3c1jjqyj0VR1Gw5ofMOm1ecbSviFSSoyDIGUBhwcD4fWKCAOw8vrXRKhMOWHJ4PzKj1kfyOlDE9Yq2qwqu6gqrNVuqw1aastXnAlOf8ASIUcVknoCwmUSVCEMv3Hr20I41cH0dDGOj3sLtneSUcjKBHpR8o6j2KtLnUkcwpx-SBcfo87ymg8h_cjXNEJL1QT-gao5FATHHUUTs1Y0PXRRP5hsTg8ZjyocqWTF-55Y1M1IsvqktkgMup-pM7ktGLKOgDVZx5U6WQN5cqS1o2rkRl01IBpuUjC4ttyBLhg4XShoXZ4h5E9kggGAbs1sXNAYlyebhocW_qGu_QHwJ0_aDGq4ALuw7BaAFWbO1NSMS9rABvYft39D7dtvXFzZJO0otzxJ9Q-uc2d64k7V51M1vnyX4AJz_Wk8_Ke-6T8fKT1qgFod19UD9GrS3WpRL8o9nwoNfdQA2etYwXA9kGH8AZDxBHAkUmlD8j41WW9Oh8ji-pVXDxdEuW3FLvt2iT1w3997Ml8lwj6UucXMMRwd3Jqx9mmeOL7Z6533kOavCvz7ihpoP3DodN1LwV9XsP3Ga-UZm1EBZoReoAN98AWzQMpfsNA4A4UeAH6RM1cveXQmhxc5tRzX09bflrRjg4G0xa3x7VIK8ARCv60wrgDGAJFZkbRWkY5MDbB6OpkIM3XzopGK6K9e-jO2SiP13YodWxW-7yjoN56M-FLa32KVy-w7xuTMCNtW2-m7tuZ6zZvTP92rbAo5voDGOF2tEFdqYG3asgOQA-PA9R6q8ZesprML_cY3z96dnEChZxlIWpQCgKvaXurw8a1v_5ID1bplU3JbwRVwS5JWzivqqX3tHSiLV9qRh_bQrfS3-krcdXxXlHNxcZf9oH2A6XXsDB0SXHriuj64pDE6JmPHfvy_LEO31Xc-ecw7DccO4dEjZKitPRcUBh_BjvaBY6wLuOqgrSvh2m2NlXdo0D7e9IU6_02ByXa9Dp02BG3TO9GUsAo7s61c2wLnUkHjvIbdlWB4dG9exn31vigxOXSC0V3YeVdMwNXSkA10H2S6xIuaJe4BeUP_nobFFybrFpKNcVpDuaD0xZDqR921ABjwHuY8jundbjfZ_BCRc-Axlzu-F4dhE88f6Heaxh17o0de7pPpu2eyQ9kgh71I--8V8K4mQk3_3ze3NePf87nOMAt7M7mAYgOUBn3en-tRwcoMEBM9ZDEqrZ7z0EMIX7u9puwGnuorPaMeko6lHKNxtMnMQWuqwemJseQXQ-n2k3cM8jmkg1dqs6G2s-0174-VOj_clc_OFt3hnmGKg0c-aIRAmDDLzYKURkMvPc-nz7VODiMdhslgYLvKighYBLmq-piA3eRgx7ezIwlR_2azOteb0qa_p0HVYNZrPaZpmZ-xLAOGZhDBAVV-q9TJh0KvmEshh3B2Dqt5gUoHw5QCS8XwUv1H0NpI78HuCdvaXkxX5lK-jVevtYaLx58o0d6BAOw2wNCRxSBbQI5ARIFt5ThHeXB9zhdx57JiwuhPeEET0V88zA_mJqL37-gwK_4M8vxXvGGd4joXec1i3wzy3dDZq33vFapd2reB-cPHMo9-Hz7S8_kecBnpJfdvwICyurNMvRV3w1Gq77Rqmn34xK5M0-0t7bas-3qPPMP6uxT-yBS_rPSXPuFn-8C9_pRg6o_98OgAzQCHdxdZwxn9AKZ6ufmfKXkB0D66BgOIGVz8BubTl1gMrnkDOv7uWgZ19qCGowH59xjLOfXsTPgvxEGWbN9Ps5f6UUlxdwpeRdpicBxAbwfYPp6qDWe5z1waWk0vEQHVIhMH_O7kuGX7v2g17_1-cgffnB-z_7998EBc9fBr3Y-qptWBYXaKIzyOjW5XO71TAjxhwvuMwsfA-GHnV2IaZsYUvgsbduBZAyrcfNOqUdVbtbi4HIL7jQRwF4wBBfsnWRz7Cl_Y96Qdfj3TC074ud3tEQrByZZP5t_T-XnlrOCe86IdpmkYsvq9qofsMea-ARCaIfFyn9ndWDTXJ3zQfC8N_BugcmbvQYygjdDzYR72EIkP8L_j_SJ8P6j0DlUB_C8XbfxAFBWC6M7Hn5H-Vzif4f-qSJCZoAX2E75_-AAe2bVOF5pfYfQjuH55COF4lyoM8ajn2AvmFPMxiwKWGPkjJOMvv6ZzAcXpQBCCK5vEAUOGvvrRUex3iCb0BkZoPI2irquYBQcaCPdDOwQzjl6SIrAYRwcBkAC6DcB-Xm_BuifAewERgggZxSrgtguIFR22uFwGm-C_PGaEBLrCuoJm33vb6w6E9MOojW6tu5jew20J96xszzkuYtmp6vnDewVwMYHKWe3u5gdm4ssOrDY0GOKRdIhgXsB0BX3qYEImd6tXAIMVgR4GpeXgQC5xCDgbJDDqvgoWDqQBgUQhGBngSYEhB-cH1wwmlgUQhXAYPu4E2BFPqYFJB5gXTpSOAQVkHfe-3hMBhBUwMOqpCJcDcRuBsQYEG7eyTjo6dcMJqd5pBtoqIGZB8QbYENBEiIQC3qzQT0EP8NMNYGdB2QSEF-YD_jmYzGERroFKIDZjaJOBWXjTBCIEQVI4aIQARUEDB8ATdbc-qPBPqMcvahQ66KW3PKjHGbWCxhoAAoExDiICDBgF0MxAcQYCgLwDV51eykA15NelwXKA0BtYMOoaBzzomzJmjAVOyNSSMF8TDqv2gMGU6JhlEBYAkYHnZkghOH4ElwS0kIiBy0IbCEXWw6iUH-CmfogHi8kIMUA92Nhjlj-oPaPgIZofnDEr3I1prloeofdIiA5Arfr2profwJgB-aa3lWTCwXflMDLe2wKt7FIG3qbx-w_IcLAxm6gi_xwkhIeHBKihYkjD1BagR84-uSVm2IEOCQav5usxDqFQfC02DYbZmP-oTh5m7wiwIIhSQQkIIhOjg1D-A7IRt66hydtjCghHxFAjrBxoVI7uClocKE9gAxvkaGhsJJXBYh7gpiE6OwRm6HrelhraGKw4hlAj2hlcK1TLBZoQMGo8wYQQAbenoTkRfuPwsOpc-Vkpfb0o6AIwJ-cbgvhg3qMLKzQHiyGPUhO24vIYr20tZDkDou0JMyZOceCuvRchSlnM7Cg93hi71yLFJPrSQyQF8H_0Iwd96_BALkwEuu_3hJ7Ce0QJs6QhNGFgAXqXSBG58onrrYqoAe7lD5EAi4TIGBuK4UoGSMcoQwHBBaoXrAqhXQfKFr-2gax66I2LiVB1hmLsKDwWYXkEGqh6XgJ5wumxpJ5ThrWDw5QWadFi7wWN4Q953h2LnuH0Bb5OOHvhk4bOFm6gNHera-xfIGQwRwJgb7wRVBFMSuifhuiZsUwJtQbRKv4feFVULoDgA-AO5irb4RU1IRFYAQVEhEsEeEdi5uUOAMkAkRV4fBb0RiQP8LsCaClMQ3q6smD7F02ETRHp0ZETvAjAREef7MRVVEPhERVESAbcGuEYJF0RkkYxGBBf4RJEiRbERQQcRNPF5Q3qllJhFB4IBjhGZKKkVNS7wokUxHGRO8P-CUR-kc0SyRRkUJHqE_4EpEpeFkY5EMR7EdfLdAWEQZECRrkaRxmRykQ5H-R1kUQjURckX5FqRYkRFHuRXoST6TB_jhEasE-4UuZNBBkXMGMKSUfQGwmqUbZHoEUjt2xp0yUT5jewQAZlGHh3Qbl5VO2wVmGP6CKg6AtYZwYcGjq_YMo64YMaE34NETagQF7e9wbJCo-9yGrZoOEgqG6IqyjiuGKCTav1rBW0vhgZm-PwYRrPhZ4WCbDh1AbLA92qtqZaDBlgmGHYwBQkUKOC0QpiFuCCQhI6UakQf4Ko8gQpkJdSUcDUL7RUQj6Gu4sJidGOY3gikIDB6QkEJZCTVEAG1CxQubSPRucDo4vRJ4JRqVBhAJ9FNU10b9RCIf0QdGAxIsiaEeCr0WdFSOn0dDGrwOQhYB5CX1HtF1Cj4EdFKIzQjdFuwd0fjEIxtxk0LyAlQr9S_R90fUIBhH0dTEtCMMflERCxQpiH5wxMdkI1OycnU5isjTvRY_qHGo-4LU8EltrbOY8opYjOUGrRoTOaGpLGYaE8j0irOBJIxYj-3rJZZkaRLnkhceoLlC5ZgXLvxoHykQIpYu-kfknq2csMkbH4uD8ny46xhuIz6GaIrnpqrMWnrvBH6Ursvoyuq-lT42aQdAs4woOrk_IeW57CPhuafhCa6PUVrifiBkP9FNHWu5rnO7hW6UISoM8VmOgAral5g4A028EptptK22lMCpuuVsMwZuVrtW6DBqSKdp5uPNgW582zQMW5Tm9fodjluqSJW7q8Pmt27Ho9bpB74gyGKm7NxucO27qmvWshBdxroL27dA_bqPEEKT2qLZNKy-JlLS2H2lO5y2FrqTjy2drqUyK28gL9hLxWKPrZuM57m0qMAGsUWzXu-Zi2A_uYFsjqygOBujpbwSwG-7w62OjBxm637ne43xBdtjAY25vmr4064HnnC9xBsupAwewxvB6c6XCsh7MI8sZhJ_xGHmB4ahaTDh4Aa6xvh4aiTnkR4keZHip62Y43A0hoKoDvoAHik8Udr_y_gPzx6xYvjNEpwMpKqzqQDameA3gIMrOD2AifuKBSgBHhLT-mWALYCGRjHqDE-CLoZjyExeMKjwsy7gkzB8ecXLwlwAdkQIleCYMfGEiJCITeqpIEieNxSJO9Oajjc8bjbJOobCqFykmoWvZK9q8XIMJQIcHs7Aa4WTt6awCq3PQIkJHUWQnMQsnn7xO-YBgVCyJJUObH0ulsV9iyJmeiECyJafrgn8eYDiP4lQesUp5MebiYBYxA8QFb4UiPtPFyeJsiQn52eQSRQZ56dUE0HxUNACP5hJOjHqQZKTsRHo6e38RfAx6uzkYwN-0AVexpJtgC2gIs__lABW-bTFHDE-__KT7Su2QZZrwQCrlvq0-EdGKws-itGUnDonsaNRs-1-hz5z6mYR0LZxBUAYlSy9NiYkDiZiWf6f6zfKgAWgN0MopAylYSSYNElLvvwshgCsjHr0uqCgrBAusthSrcQsvVKrC4nB4mygSerz7xwTZJ9hdWhvi0CihDUChE7Bi3M_q9qggX2BUJAWnmDsKfbvDoEB5idCiVhDicQlHArgN4n4Yu5oPG9MpCYQAkAFcS2E1JUeCC5DRRtk74fJKsXP4NJbyZS5kpOGvXAXBCSW0lO-6BsVzoeu8G9Z7xDfprFIJ6IlNp9gDCeoRTeHjplBeO7AKjI-Ol8Xn5RJB0d7DxcNKcITZJfvjCAB-qfrknxJrSVb4aIlMufYTB5gPhIgurUvYLxc8gGLA3RNpDaTPqWEDy7Wggsd-pmceciS6kBiQFCo6o9cNCjay9cED6Dy4EUQCBx8oLs4A-diEc6tY08vhqAhrzgtERmNzqoFL-brDbHaxuIV2K9i9id0ATijqISa1G56iD4wYfgtTCpIfmOrARegwpm4J4eKUO75KBwPQEouxKRXEJxf9h-ArRhbAQYO-W4V0YNqlGnoHzhjCm2kmWA8kjBCI3aS4LnR4ISNIDpaJODED2JFgmk2S1AvmGHqhYeuiUaO_EMLeaNGorBha_5iODnayMSeBlpnskryaCVaeQbRxuDieGJmTaZO4BuraRwLtpswcwFdp16T2k4hQKT2Izpq3I5AHwRaeXENqu6c9qMO7DoxpHpgVielXAR4QnQXpgiGzGjpY4EOlviEIXilKJlUZOnPpSafibIC-ScDIN-n6Sumw4Hsr-kYZh2IemlQprtNG4GyMtynMGhoGJ6CeE4YD6fhWADEkJUDjpkA7-apNUafsrXL8Y4AHgG-ShgrgO_E_C6PM6Sdg__h5qpI99iNzuC1_g0BbEDMqWqPg6MgsmWyr6WBjye39jHEcCVgAHQVEJCtSLRIHNoiAq6QGIyGSg1ul4IXsnOKsx2AFfjRAog8nk3wYC8QLhnzx4sj7qEZCiXApmupGTr5YeLHrJC_GJUFiD_I8QJYDepH4bOEMZNOg47lQrgEsDq4ulL8YOOPusYbw8iPA4Ry8VcX0Fwm_GbgL8GCAchnKZr4S7pw8mzsMLFyamd-kIOw7kaqhZkEZs5uZxGYnFeZInv7IgwbqRHL-pNGYi50Z2shFm4GF9pfZpWPQExCQKtZIVmdZ5gEGk-A5WffhYYlYd6kVENEI6YKy3Nlc6GZfSGNmbGwtog4T0gWY3BQAIWeJ4QRtGeFkGx6trCINZdaRjLNZ5GeLL-ZVGW-FyuUnqdnuZZulMS4--gCfh8ROgU2rx4AWR3B7ZB2dRlHZXWSdnxq0uhwIj2x2r2RBUsPB1mbGSxPqBkgP2fqDwUAIj8IJZeWVZKP6QgJzjuouZDMj5g5ECehngvamA4bZcrlAKzhn6Sfj4pNWcdmbOPWadlPWx6Z5kYySFkRQ3ZjDj1DtKXptjpp864I_Dxs3Oe5lLAY2IuBlBpCvjJ7-8BNzlp8kfB7y0iT4BaDBcHgLBqWgcOTaB1QI1Mwiy5Z4PLnKQiue0CHOlAPJAWgGuW-DDUt5DrltQcuVnyJAhuYc5wAZud6kW52uTLk25euXbkO5lAM7mHZmuZbnN4uuWOD659ueyJPg5ua9leUeVqMr0iPwIhzF0FHA-D6ALwMkCTZPWnFHmAb7nRn32SwBdYXWK1nnmcg_oKoymauAtHmKZ2cTSndAcmBcCgphwBFL_hamePE0JqSDabsYrgHjAHisXokBsY9uo7oa5n4k5nrC4sreFdh14f2GthQ4RGmjBoGRepuiInkoE3u3xvEBgA50bR7lRJikjFaJG_svlQAWsPGEG6WUcDHsA2-QUbqsDIBBhEJzbDNrdA28v6iRgheT1onEpHCVDlQPyfbYr5Q6X8kdcfgHvnjpmnEQayQ2xloQ_Jv-avmrB3-R_l_58YTaSAFUwEPiv5_XFcBQF4BTmnf5YBf_mwFqnvAXtKb-VcBgFX-VwgYFMBSwrWIFAst7gcy_F4BSmQMhUSd5KKY6nYUdOSyBp5EqQQAv56kN3nOp8RMQCi5IwN-F-ZwBSECOp3BQ4S8F5AgIWwCCBZwUiF0gpS5LEPqULqSF4wGgoyF5IE6lyFOqAoW0aMAFYbjc_AE-j8APQMilMC28hJjIYW6RikQWUxhGFz4OMSnA_J7BSJE-AmPAQXCJk-aYGHuKcFwhOFDEberEFNwaU5ZRlTgPAaILoPYVRwjhRRH-Fn-e4VlOdgbel0kPhYRHJArhSvn_5QRRvn3qiwZmSD4IwBEVuwjhZJEuF0wHvlr5mRYtH_gXhVHA-FikTEXQFgRR4UhBIRbkXN46UKkxFFVkfUWoFhYBUWnhVRYkXeFOpKZGpFpRfvmNF8Rck4tFksFsHmp2LGRZ1OgmjakJIwsSJruA_SevrU-zgFsxQiusEsCixHmJTLtOEsW0jdOq-vanvsqIGmqDegzq6mAeozr2myIGQGkDdyzWgQDREEwBeoB0Srn2nTOszvM6fOo8krHYaU8iWzD5skBMnaaOng-53xAGowDPujYIz5Px7WtOifuVWSdxiuTPpMnGaMJZEA4G8Jf_EP4SJZjrw6fKmiXbZ4sijbh8LlupAHFjAJg4AaiJZiVPxY6K_Fol5aTHbOWt8XiVwlDJY3jEl7QGOhkl_WeLzWAAWOA60g4sQXHfSTsGRBOI6xXK7i8MoF7xR2wlnLy7wugDkBAakQFuk8y7Iq3GS8HbtdrBqUpdLazC1AC8DCgw8VW72E0AMwR02pJjRiYgbrEMJKwJ6NFAIs46rODWlfNlvEkqypFzKPJjYaSb5AKQNUR2AHpZaUacC5ErBtulWRyVk-K-hsXUAgyXXLVp5FgjDeqppVijxKqAIkBiA9cLaVQAWZfMoJKm8fO6OuFmBnGL5EqQqV-xx4BkqUyD-XdK-xAyVsU7FxKEVwS5EwOKWwAkmj4mtlmxevS6eT_n8XjesoNMTBqSwJGDhiiAhSjZAm9vOW-UDZt8V8MRZWHTapVBD2UFefZa5T002KkHgpxBKpvZ-lZTH4a72S0khk2FnpNuU3Au5RXmX2qrr2p8lWYGAox2ckOHzCqlWeiJwA96K_FPWGDsLRcsmHjIz3qJrEzqCl-yGyVZ-2sKhlv2yirBTtR_PGOh3qOQJtz0uO3COC4eJGF-WQy0kDoGwwfpO7iwVQ3jdyAVD6K9ZtO3-S-W4GLWbWC4AyrEzqJAUSAqhZ-2pRAKbAxWuQwv2l0mA6O41JkRSbAzGK_EthzgJrANAnkJYD_WdVvYC6g2oOeAlQGUE5BGse6fAVTeM3oRXZAJZZDqsBMnFSVuMI5UjDZ2aQJGBE2DlktIY2SdnY77I_zCAn5I4lZJXSV4YrJXyVQfv15SgAzo3IDEqZMRX-AQ3ktIx6tgH-VgWS0hoQigHxXgCRgQAroV1cicnFDbAbUQBB3wWnHRa2pIAGaj8ACEMeD8AVwPwBAgxIFUDeAGQHslYAPoKUyRQ6wPwAPmeEDlXsA_ALI44ABkBVU1g_AOUAskNVUgB1VIAMsn5Af4BcJlVyEJgDkgDBHmBpYRFGaBSgFoPlUggRVQIDNVFgPwBRAaALVX8AnVklXzVXVUNVo40kBXze8nVYbj8AE1aICdV_AAAB6SlTgBOQjVRtULVggO0grVIAKdVXVsjjdVdV9zFczFkD1adUswOAHZAZQ11SAD1wrVQpBfVYqUzA4ALMK9X8AA-fBCHOdGV9X_VL1YDWrgh1VqCgWRAAjVXVz1fwDrAp0PIDacM1bgBIM0DJoDUA8rCsXgQmkCAC0AvoFkA5VeVdsgWgR1SzZzA_APjVSw8gEAA",__position:0,__code:"<Positionable\n  resizable\n  position={{\n    left: '0%',\n    top: '0%',\n    height: '25%',\n    width: '25%',\n    rotation: '0deg',\n  }}\n>\n  {({ renderedPosition, refHandlers }) => (\n    <div\n      ref={refHandlers.container}\n      style={{\n        display: 'inline-block',\n        position: 'relative',\n        width: renderedPosition.width,\n        height: renderedPosition.height,\n        backgroundColor: '#ddd',\n      }}\n    >\n      <span>Hello!</span>\n      <div\n        ref={refHandlers.seResize}\n        style={{\n          position: 'absolute',\n          bottom: '-5px',\n          right: '-5px',\n          width: '10px',\n          height: '10px',\n          backgroundColor: '#f00',\n        }}\n      />\n    </div>\n  )}\n</Positionable>\n\n<div\n  style={{\n    display: 'inline-block',\n    width: '25%',\n    height: '25%',\n    marginLeft: '1em',\n    backgroundColor: '#d7d7d7',\n  }}\n>\n  Non-Positionable div\n</div>",__scope:{props:this?this.props:o,Positionable:i.b,Playground:g.a},style:{backgroundColor:"#f0f0f0",height:"400px",overflow:"hidden",padding:0,position:"relative"}},a.a.createElement(i.b,{resizable:!0,position:{left:"0%",top:"0%",height:"25%",width:"25%",rotation:"0deg"}},function(e){var n=e.renderedPosition,o=e.refHandlers;return a.a.createElement("div",{ref:o.container,style:{display:"inline-block",position:"relative",width:n.width,height:n.height,backgroundColor:"#ddd"}},a.a.createElement("span",null,"Hello!"),a.a.createElement("div",{ref:o.seResize,style:{position:"absolute",bottom:"-5px",right:"-5px",width:"10px",height:"10px",backgroundColor:"#f00"}}))}),a.a.createElement("div",{style:{display:"inline-block",width:"25%",height:"25%",marginLeft:"1em",backgroundColor:"#d7d7d7"}},"Non-Positionable div")),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),a.a.createElement(r.PropsTable,{of:i.b}),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"render-callback"}},"Render Callback"),a.a.createElement(A.MDXTag,{name:"p",components:n},"You can use Positionable by provided a function as ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," or via the\n",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," props. Both receive an object containing the current position\n(",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"position"),") and the ref handlers (",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refHandlers"),")."),a.a.createElement(A.MDXTag,{name:"h3",components:n,props:{id:"children"}},"Children"),a.a.createElement(A.MDXTag,{name:"pre",components:n},a.a.createElement(A.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts",metastring:null}},"<Positionable>\n    {({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n</Positionable>\n")),a.a.createElement(A.MDXTag,{name:"h3",components:n,props:{id:"render-prop"}},"Render Prop"),a.a.createElement(A.MDXTag,{name:"pre",components:n},a.a.createElement(A.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts",metastring:null}},"<Positionable\n    render={({ position, refHandlers }) => (\n        <div ref={refHandlers.container} style={position} />\n    )}\n/>\n")),a.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"ref-handlers"}},"Ref Handlers"),a.a.createElement(A.MDXTag,{name:"p",components:n},"Positionable provides ref handlers for the container element, 4 corner rotate\nelements, and 8 resize directions elements. The only required ref is for the\ncontainer. The available refs are attached to the ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refHandlers")," property on the\nrender callback:"),a.a.createElement(A.MDXTag,{name:"ul",components:n},a.a.createElement(A.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"container")),a.a.createElement(A.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"neResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"eResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"seResize"),a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"swResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"wResize")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nwResize")),a.a.createElement(A.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"neRotate")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"seRotate")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"swRotate")," ",a.a.createElement(A.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nwRotate"))))}}])&&s(o.prototype,t),l&&s(o,l),n}()}}]);
//# sourceMappingURL=documentation-positionable.b02b8a71913772dc007c.js.map