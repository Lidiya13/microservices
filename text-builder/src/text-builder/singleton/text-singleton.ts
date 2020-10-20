export class TextSingleton {
    private static instance: TextSingleton;

    private constructor() {
    }

    public static getInstance(): TextSingleton {
        if (!TextSingleton.instance) {
            TextSingleton.instance = new TextSingleton();
        }
        return TextSingleton.instance;
    }
}

const instance = TextSingleton.getInstance();