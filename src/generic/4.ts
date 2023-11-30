/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface PageComponent {
  title: string;
}

class Page extends Component<PageComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
