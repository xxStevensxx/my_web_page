const letter = new Letterize({
        targets: ".welcome_msg"
      });

      const animation = anime.timeline({
        targets: letter.listAll,
        delay: anime.stagger(100, {
          grid: [letter.list[0].length, letter.list.length],
          from: "center"
        }),
        loop: true
      });

      animation
        .add({
          scale: 0.5
        })
        .add({
          letterSpacing: "10px"
        })
        .add({
          scale: 1
        })
        .add({
          letterSpacing: "6px"
        });
