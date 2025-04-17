import HeaderServer from "../landing/landing.server/header.server";
import FooterServer from "../landing/landing.server/footer.server";

export default function Privacy() {
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
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>

            <h3 className="text-2xl font-medium mb-3">Lorem Ipsum</h3>
            <p className="mb-4 text-lg leading-relaxed">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="text-2xl font-medium mb-3">Lorem Ipsum</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <h3 className="text-2xl font-medium mb-3">Lorem Ipsum</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="text-lg leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="text-lg leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </section>
        </div>
      </div>

      <FooterServer />
    </div>
  );
}