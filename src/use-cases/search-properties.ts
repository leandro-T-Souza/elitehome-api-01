import { PropertiesRepository } from "@/database/repositories/properties";
import { Property } from "@/entities/property";


type SearchPropertiesUseCaseResponse = {
  properties: Property[];
};

export class SearchPropertiesUseCase {
  constructor(private repository: PropertiesRepository){}

     async execute(): Promise<SearchPropertiesUseCaseResponse> {
        const properties = await this.repository.find()

    return { properties };
  }
}
