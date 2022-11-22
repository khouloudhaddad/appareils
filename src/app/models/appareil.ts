export class Appareil {
   name: string;
   status: string;

  public constructor(new_name: string, new_status: string) {
    this.name = new_name;
    this.status = new_status;
  }
}
