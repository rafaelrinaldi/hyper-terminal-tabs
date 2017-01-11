const css = `
  .header_header {
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #F3F3F3 0%, #D3D3D3 100%);
  }

  .tabs_nav {
    margin-top: 38px;
  }

  .tabs_nav .tabs_borderShim {
    display: none;
  }

  .tabs_list {
    margin-left: 0 !important;
  }

  .tabs_nav .tabs_title {
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    height: 34px !important;
  }

  .terms_terms {
    margin-top: calc(34px * 2) !important;
  }

  .tabs_nav .tabs_title,
  .tabs_nav .tab_tab {
    color: #333 !important;
    border-top: 1px solid !important;
    border-bottom: 1px solid !important;
    border-color: #A0A0A0 !important;
  }

  .tabs_nav .tab_first {
    border-left-width: 0 !important;
    padding-left: 1px;
  }

  .tabs_nav .tab_tab:first-of-type {
    border-left: 1px solid transparent !important;
  }

  .tabs_nav .tabs_tab:last-of-type {
    border-right: 1px solid transparent !important;
  }

  .tabs_nav .tab_tab:not(.tab_active) {
    color: #888 !important;
    background-color: #BEBEBE !important;
  }

  .tabs_nav .tab_tab:not(.tab_active):hover {
    background-color: #B2B2B2 !important;
  }

  .tabs_nav .tab_tab:not(.tab_active):hover {
    color: #333 !important;
  }

  .tabs_nav .tabs_title,
  .tabs_nav .tabs_list .tab_active {
    border-top-color: #BDBDBD !important;
    background-color: #D3D3D3;
  }

  .tabs_nav .tabs_list .tab_icon {
    right: auto;
    left: 7px;
    z-index: 2;
    color: #6C6C6C;
    border-radius: 2px;
    background-color: transparent;
  }

  .tabs_nav .tabs_list .tab_icon:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .tabs_nav .tabs_list .tab_icon svg {
    width: 8px;
    height: 8px;
    top: 3px;
    left: 3px;
  }
`;

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    css: (config.css || '') + css
  });
};
