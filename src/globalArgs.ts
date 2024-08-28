import { URL } from 'url';
import { workspace } from 'vscode';

export interface GlobalArgs {
    url: URL;

    aqoraUrl(): URL;
    graphqlUrl(): URL;
}

export class GlobalArgsImpl implements GlobalArgs {
     url: URL;
     private static instance: GlobalArgsImpl;

     private constructor() {
        this.url = new URL(workspace.getConfiguration().get('aqora.url') || 'https://aqora.io');
    }

    public static getInstance(): GlobalArgsImpl {
        if (!GlobalArgsImpl.instance) {
            GlobalArgsImpl.instance = new GlobalArgsImpl();
        }
        return GlobalArgsImpl.instance;
    }

    aqoraUrl(): URL {
        return new URL(this.url);
    }
    graphqlUrl(): URL {
        return new URL('/graphql', this.aqoraUrl());
    }
}