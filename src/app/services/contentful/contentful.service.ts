import { Injectable } from '@angular/core';
import { GraphQLClient } from 'graphql-request';
import { environment } from '../../../../environment';
import { endpoint } from '../../../../codegen';
import { getSdk } from '../../../lib/__generated/sdk';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private readonly graphQlClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${environment.contentfulAccessToken}`,
    },
  });

  private readonly previewGraphQlClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${environment.contentfulPreviewToken}`,
    },
  });

  constructor() { }

  client = getSdk(this.graphQlClient)
  previewClient = getSdk(this.previewGraphQlClient)
  getContentful = this.graphQlClient

}
