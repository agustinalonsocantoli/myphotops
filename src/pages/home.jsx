import { CollageComponent } from "../components/collage";

export const HomeComponent = () => {

    return (
        <div>
            <section className="home">
                <div className="home__title">
                    <div className="title__one">
                        <h1>Find</h1>
                        <h1>Save</h1>
                    </div>

                    <div className="title__two">
                        <h1>Donwload</h1>
                    </div>

                    <div className="title__three">
                        <h3>Your</h3>
                        <h3>Favorite</h3>
                        <h3>Photo</h3>
                    </div>
                    
                </div>
                    
                <div className="home__images">
                    <CollageComponent />
                </div>
            </section>
        </div>
    );
};