import { Accordion } from "./components/Accordion";

export default function App() {
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <Accordion
          data={[
            {
              key: "Question 1",
              value:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae!",
            },
            {
              key: "Question 2",
              value:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam itaque explicabo excepturi recusandae in sunt, at soluta. Laborum at, est a odit corrupti ut tenetur enim culpa commodi quaerat, fugit rerum quasi debitis animi, iure quibusdam inventore doloremque aperiam saepe perferendis modi cumque eveniet! Dolorem sunt corrupti consequuntur quaerat necessitatibus illum natus asperiores debitis esse repudiandae! Suscipit mollitia cupiditate alias iste dolore optio minus possimus maxime. At, ipsum? Voluptatibus deserunt velit magnam placeat, iure voluptatum laboriosam fugit? Est neque quibusdam eius qui aliquam quasi quis explicabo reprehenderit eligendi numquam, illum similique atque pariatur et veniam fugiat dolorem accusamus maiores modi.",
            },
            {
              key: "Question 3",
              value: (
                <>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis accusamus officiis assumenda eos, sequi eaque
                    accusantium illum culpa ex nobis illo tempore hic blanditiis
                    reiciendis enim pariatur ea aliquid quos fugiat odio veniam
                    quae sunt similique voluptatum? Beatae adipisci, consectetur
                    accusantium dolorum magnam dolores nisi hic, odit deserunt
                    voluptatem laborum optio ut a vel doloremque iusto, qui
                    cumque recusandae autem similique quibusdam eveniet ipsam.
                    Libero, eos. Vel voluptas, dolorem sunt nihil magni eveniet
                    ipsam quo dignissimos doloremque earum excepturi mollitia
                    accusantium repellat, non esse. Odio tempore eum, quisquam
                    culpa totam, laboriosam doloremque aspernatur ullam
                    molestiae, nihil omnis dolorum facilis? Earum.
                  </p>
                  <p>
                    Corporis blanditiis ea debitis fugiat? Officiis beatae
                    accusantium voluptate, dolor enim repellat rerum non,
                    molestiae ipsam corporis voluptatibus consectetur quo magni
                    facilis esse consequatur animi necessitatibus repudiandae
                    sit dicta praesentium, quia laborum. Tempore a consequuntur
                    officiis quae vitae doloremque non consequatur obcaecati
                    assumenda fugiat. Consequatur aperiam saepe voluptatum hic
                    pariatur ea omnis, eum iusto sapiente fuga, enim officiis
                    similique rem, repellat excepturi unde optio cumque ullam
                    possimus? Nemo voluptatum iusto, sed deserunt incidunt
                    voluptate aspernatur quia temporibus, possimus omnis cum
                    atque voluptas neque quis, quibusdam nihil harum commodi
                    alias? Sit, officiis aliquid eaque vitae temporibus dolores
                    saepe omnis ducimus soluta?
                  </p>
                </>
              ),
            },
          ]}
          keyAttr="key"
          valAttr="value"
        />
      </div>
    </div>
  );
}
