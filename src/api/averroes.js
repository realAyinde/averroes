/**
 * Mocking client-server processing
 */
const _averroes = [
  {
    id: "1",
    name: "Kakanfo",
    about:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    ability:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    appearance:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    others:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
  },
  {
    id: "2",
    name: "Medusa",
    about:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    ability:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    appearance:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
    others:
      "<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus modi a enim exercitationem nesciunt, quos assumenda facere, qui, ab quae vero nam reiciendis beatae!</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga  optio? Magnam, expedita at.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio  distinctio repellat laboriosam error non ipsa nesciunt voluptas  architecto nam! Eum magni dolorem consectetur? </p> <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid  minus modi a enim exercitationem nesciunt, quos assumenda facere,  qui, ab quae vero nam reiciendis beatae!  </p>  <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus  repellendus, eveniet nihil non odit iure, aut voluptates nostrum  temporibus doloribus ad eum, laboriosam beatae similique saepe eius adipisci aliquid aliquam. At necessitatibus voluptates laborum  maiores, quis hic enim totam natus cum minus aliquam vero ipsa fuga optio? Magnam, expedita at. </p>",
  },
];

export default {
  async getAverroes() {
    await wait(100);
    return _averroes;
  },

  //   async buyProducts(products) {
  //     await wait(100);
  //     if (
  //       // simulate random checkout failure.
  //       Math.random() > 0.5 ||
  //       navigator.webdriver
  //     ) {
  //       return;
  //     } else {
  //       throw new Error("Checkout error");
  //     }
  //   },
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
