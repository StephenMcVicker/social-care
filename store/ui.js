export const state = () => ({
  hideNav: false,
  hideMenu: false,
  menuOpen: false,
  navActiveTab: 1
});

export const mutations = {
  setHideMenu (state, value) {
    state.hideMenu = value;
  },
  setHideNav (state, value) {
    state.hideNav = value;
  },
  setNavActiveTab (state, tab) {
    state.navActiveTab = tab;
  },
  toggleMenu (state) {
    state.menuOpen = !state.menuOpen;
  }
};

export const getters = {
  getHideMenu (state) {
    return state.hideMenu;
  },
  getHideNav (state) {
    return state.hideNav;
  },
  getMenuOpen (state) {
    return state.menuOpen;
  },
  getNavActiveTab (state) {
    return state.navActiveTab;
  }
};