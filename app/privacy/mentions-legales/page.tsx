import HeaderServer from "../../landing/landing.server/header.server";
import FooterServer from "../../landing/landing.server/footer.server";

export default function MentionsLegales() {
  return (
    <div>
      <HeaderServer />

      <div className="relative bg-fixed py-16">
        <div className="absolute inset-0 bg-[url('/galaxie.png')] bg-cover bg-center bg-fixed brightness-30 blur-xs"></div>

        <div className="container relative z-10 mx-auto px-4 py-8 text-white font-poppins">
          <h1 className="text-4xl font-bold mb-8 text-center">Lorem Ipsum</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
             <p className="text-lg leading-relaxed">
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>

           <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
             <p className="mb-4 text-lg leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <a href="/privacy" className="underline hover:text-blue-400 transition-colors duration-300">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="text-lg leading-relaxed">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
             <p className="mt-8 text-sm italic leading-relaxed">
              Lorem ipsum dolor sit amet: 16 avril 2025
            </p>
          </section>
        </div>
      </div>

      <FooterServer />
    </div>
  );
}
