export class randomIntentGenerator {
    get intents() {
        let intent = [
            "message.get_plot",
            "message.get_movie_year",
            "message.get_actor",
            "message.get_genre",
            "message.get_movie",
        ];

        return intent[Math.floor(Math.random() * 5)];
    }
}