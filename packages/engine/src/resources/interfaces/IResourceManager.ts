import {IResource} from "./IResource";

export interface IResourceManager {
    loadResource(path: string): IResource;
    freeResource(path: string): void;
}