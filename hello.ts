class HelloWorld {
    public static main(): number {      //public - można korzystać z metody poza klasą (przeciwieństwo to private)
        console.log('Hello World')      //static - metoda wywoływana na klasie a nie na instancji
        return 0                        // : number - określa, że metoda ma zwracać number
    }
}

HelloWorld.main()