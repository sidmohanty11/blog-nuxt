import Vuex from 'vuex';

export const DUMMY_POSTS = [
  {
    id: "1",
    title: "My Title 1",
    previewText: "My previewText 1",
    thumbnail:
      "https://images.unsplash.com/photo-1558259299-5d46c4408730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80"
  },
  {
    id: "2",
    title: "My Title 2",
    previewText: "My previewText 2",
    thumbnail:
      "https://images.unsplash.com/photo-1627609834368-8beaa3fb707e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
  },
  {
    id: "3",
    title: "My Title 3",
    previewText: "My previewText 3",
    thumbnail:
      "https://images.unsplash.com/photo-1628911773925-2586d87f2b5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "4",
    title: "My Title 4",
    previewText: "My previewText 4",
    thumbnail:
      "https://images.unsplash.com/photo-1628114855639-f8294222fdc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "5",
    title: "My Title 5",
    previewText: "My previewText 5",
    thumbnail:
      "https://images.unsplash.com/photo-1617096199821-6273169505cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "6",
    title: "My Title 6",
    previewText: "My previewText 6",
    thumbnail:
      "https://images.unsplash.com/photo-1629362050072-97b15dacf395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
  }
];

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      // nuxtServerInit(vuexCtx, ctx) {
      //   return new Promise((res) => {
      //     vuexCtx.commit('setPosts', {
      //       loadedPosts: DUMMY_POSTS
      //     });
      //     res();
      //   });
      // },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
