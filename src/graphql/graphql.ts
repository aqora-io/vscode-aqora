/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<FixedOffset> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: Date; output: Date; }
  /** A scalar that can represent any JSON value. */
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
  Semver: { input: `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}` | `${number}.${number}.${number}+${string}` | `${number}.${number}.${number}-${string}+${string}`; output: `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}` | `${number}.${number}.${number}+${string}` | `${number}.${number}.${number}-${string}+${string}`; }
  Upload: { input: { filename: string, content_type?: string, content: File  }; output: { filename: string, content_type?: string, content: File  }; }
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: URL; output: URL; }
  UsernameOrID: { input: string; output: string; }
};

export type Action =
  | 'ADD_COMPETITION_MEMBER'
  | 'ADD_EVENT_COMPETITION'
  | 'ADD_EVENT_MEMBER'
  | 'AWARD_BADGE'
  | 'CREATE_COMMENT'
  | 'CREATE_COMPETITION'
  | 'CREATE_COMPETITION_RULE_AGREEMENT'
  | 'CREATE_EVENT'
  | 'CREATE_FORUM'
  | 'CREATE_ORGANIZATION'
  | 'CREATE_SUBJECT_SUBSCRIPTION'
  | 'CREATE_SUBMISSION_VERSION'
  | 'CREATE_TAG'
  | 'CREATE_TOPIC'
  | 'CREATE_USE_CASE_VERSION'
  | 'DELETE_COMMENT'
  | 'DELETE_COMPETITION'
  | 'DELETE_EVENT'
  | 'DELETE_FORUM'
  | 'DELETE_ORGANIZATION'
  | 'DELETE_SUBJECT_SUBSCRIPTION'
  | 'DELETE_TAG'
  | 'DELETE_TOPIC'
  | 'DELETE_USER'
  | 'PUBLISH_VOTE'
  | 'READ_COMMENT'
  | 'READ_COMPETITION'
  | 'READ_COMPETITION_MEMBERSHIP'
  | 'READ_COMPETITION_RULE'
  | 'READ_COMPETITION_RULE_AGREEMENT'
  | 'READ_EVENT'
  | 'READ_EVENT_COMPETITION'
  | 'READ_EVENT_MEMBERSHIP'
  | 'READ_PROJECT_VERSION'
  | 'READ_PROJECT_VERSION_EVALUATION'
  | 'READ_PROJECT_VERSION_FILE'
  | 'READ_SUBJECT_SUBSCRIPTION'
  | 'READ_TOPIC'
  | 'READ_USER_EMAIL'
  | 'READ_USER_NOTIFICATIONS'
  | 'READ_USER_PERMISSIONS'
  | 'REMOVE_COMPETITION_MEMBER'
  | 'REMOVE_EVENT_COMPETITION'
  | 'REMOVE_EVENT_MEMBER'
  | 'REMOVE_ORGANIZATION_MEMBER'
  | 'SET_COMPETITION_ORDERING_PRIORITY'
  | 'TRANSFER_COMPETITION_OWNERSHIP'
  | 'TRANSFER_EVENT_OWNERSHIP'
  | 'TRANSFER_ORGANIZATION_OWNERSHIP'
  | 'UPDATE_AGENDA'
  | 'UPDATE_COMMENT'
  | 'UPDATE_COMPETITION'
  | 'UPDATE_EVENT'
  | 'UPDATE_FORUM'
  | 'UPDATE_ORGANIZATION'
  | 'UPDATE_ORGANIZATION_MEMBERSHIP'
  | 'UPDATE_PROJECT_VERSION'
  | 'UPDATE_PROJECT_VERSION_FILE'
  | 'UPDATE_TOPIC'
  | 'UPDATE_USER'
  | 'UPLOAD_FILES'
  | '%future added value';

export type ArchiveKind =
  | 'TAR'
  | 'ZIP'
  | '%future added value';

export type Badge =
  | 'PARIS_2024_HACKERS'
  | 'PARIS_2024_WINNERS'
  | 'TEST'
  | '%future added value';

export type Comment = Node & Votable & {
  __typename?: 'Comment';
  author: User;
  children: CommentConnection;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  edited: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  numChildren: Scalars['Int']['output'];
  parent: Maybe<Comment>;
  topic: Topic;
  viewerCan: Scalars['Boolean']['output'];
  voted: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type CommentChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type CommentViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges: Array<CommentEdge>;
  /** A list of nodes. */
  nodes: Array<Comment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  hotness: Scalars['Float']['output'];
  /** The item at the end of the edge */
  node: Comment;
};

export type Competition = Node & Subscribable & {
  __typename?: 'Competition';
  banner: Maybe<Scalars['Url']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entityRuleAgreements: CompetitionRuleAgreementConnection;
  entitySubscription: Maybe<SubjectSubscription>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  latestRule: CompetitionRule;
  leaderboard: ProjectVersionEvaluationConnection;
  members: CompetitionMembershipConnection;
  rules: CompetitionRuleConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  submission: Maybe<Submission>;
  submissions: SubmissionConnection;
  tags: TagConnection;
  thumbnail: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  topics: TopicConnection;
  useCase: UseCase;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionEntityRuleAgreementsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionEntitySubscriptionArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionLeaderboardArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionMembersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionRulesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionSubmissionArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionSubmissionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  entityId: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTopicsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type CompetitionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CompetitionConnection = {
  __typename?: 'CompetitionConnection';
  /** A list of edges. */
  edges: Array<CompetitionEdge>;
  /** A list of nodes. */
  nodes: Array<Competition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CompetitionEdge = {
  __typename?: 'CompetitionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Competition;
};

export type CompetitionMembership = Node & {
  __typename?: 'CompetitionMembership';
  competition: Competition;
  entity: Entity;
  id: Scalars['ID']['output'];
  kind: CompetitionMembershipKind;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionMembershipViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CompetitionMembershipConnection = {
  __typename?: 'CompetitionMembershipConnection';
  /** A list of edges. */
  edges: Array<CompetitionMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<CompetitionMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CompetitionMembershipEdge = {
  __typename?: 'CompetitionMembershipEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: CompetitionMembership;
};

export type CompetitionMembershipKind =
  | 'HOST'
  | 'PARTICIPANT'
  | '%future added value';

export type CompetitionRule = Node & {
  __typename?: 'CompetitionRule';
  competition: Competition;
  createdAt: Scalars['DateTime']['output'];
  entityAgreement: Maybe<CompetitionRuleAgreement>;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};


export type CompetitionRuleEntityAgreementArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CompetitionRuleAgreement = Node & {
  __typename?: 'CompetitionRuleAgreement';
  competitionRule: CompetitionRule;
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  id: Scalars['ID']['output'];
};

export type CompetitionRuleAgreementConnection = {
  __typename?: 'CompetitionRuleAgreementConnection';
  /** A list of edges. */
  edges: Array<CompetitionRuleAgreementEdge>;
  /** A list of nodes. */
  nodes: Array<CompetitionRuleAgreement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CompetitionRuleAgreementEdge = {
  __typename?: 'CompetitionRuleAgreementEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: CompetitionRuleAgreement;
};

export type CompetitionRuleConnection = {
  __typename?: 'CompetitionRuleConnection';
  /** A list of edges. */
  edges: Array<CompetitionRuleEdge>;
  /** A list of nodes. */
  nodes: Array<CompetitionRule>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CompetitionRuleEdge = {
  __typename?: 'CompetitionRuleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: CompetitionRule;
};

export type CompetitionSubscription = Node & SubjectSubscription & {
  __typename?: 'CompetitionSubscription';
  competition: Competition;
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  id: Scalars['ID']['output'];
  kind: SubjectKind;
  subject: Subscribable;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionSubscriptionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tagIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEventInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateForumInput = {
  description: InputMaybe<Scalars['String']['input']>;
  guidelines: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority: InputMaybe<Scalars['Int']['input']>;
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMultipartUploadResponse = {
  __typename?: 'CreateMultipartUploadResponse';
  uploadId: Scalars['String']['output'];
  urls: Array<Scalars['Url']['output']>;
};

export type CreateOrganizationInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  github: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website: InputMaybe<Scalars['Url']['input']>;
};

export type CreatePasswordResetInput = {
  usernameOrEmail: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTopicInput = {
  description: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type DeletedComment = {
  __typename?: 'DeletedComment';
  commentId: Scalars['ID']['output'];
  parentId: Maybe<Scalars['ID']['output']>;
  topicId: Scalars['ID']['output'];
};

export type Entity = {
  badges: EntityBadgeConnection;
  bio: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website: Maybe<Scalars['String']['output']>;
};


export type EntityBadgesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubjectSubscriptionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<SubjectKind>>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubmissionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  competitionId: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EntityViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EntityBadge = Node & {
  __typename?: 'EntityBadge';
  badge: Badge;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type EntityBadgeConnection = {
  __typename?: 'EntityBadgeConnection';
  /** A list of edges. */
  edges: Array<EntityBadgeEdge>;
  /** A list of nodes. */
  nodes: Array<EntityBadge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityBadgeEdge = {
  __typename?: 'EntityBadgeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EntityBadge;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  /** A list of edges. */
  edges: Array<EntityEdge>;
  /** A list of nodes. */
  nodes: Array<Entity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityEdge = {
  __typename?: 'EntityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Entity;
};

export type EntityKind =
  | 'ORGANIZATION'
  | 'USER'
  | '%future added value';

export type EntityVote = {
  __typename?: 'EntityVote';
  score: Scalars['Int']['output'];
  subject: VotableEdge;
  votedAt: Scalars['DateTime']['output'];
};

export type Event = Node & {
  __typename?: 'Event';
  agenda: Maybe<Scalars['JSON']['output']>;
  banner: Maybe<Scalars['Url']['output']>;
  competitions: EventCompetitionConnection;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  members: EventMembershipConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnail: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type EventCompetitionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EventMembersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  userIsOrgMember: InputMaybe<Scalars['ID']['input']>;
};


export type EventViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EventCompetition = Node & {
  __typename?: 'EventCompetition';
  competition: Competition;
  event: Event;
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type EventCompetitionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EventCompetitionConnection = {
  __typename?: 'EventCompetitionConnection';
  /** A list of edges. */
  edges: Array<EventCompetitionEdge>;
  /** A list of nodes. */
  nodes: Array<EventCompetition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventCompetitionEdge = {
  __typename?: 'EventCompetitionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EventCompetition;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** A list of nodes. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Event;
};

export type EventMembership = Node & {
  __typename?: 'EventMembership';
  entity: Entity;
  event: Event;
  id: Scalars['ID']['output'];
  kind: EventMembershipKind;
  viewerCan: Scalars['Boolean']['output'];
};


export type EventMembershipViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EventMembershipConnection = {
  __typename?: 'EventMembershipConnection';
  /** A list of edges. */
  edges: Array<EventMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<EventMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventMembershipEdge = {
  __typename?: 'EventMembershipEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EventMembership;
};

export type EventMembershipKind =
  | 'HOST'
  | 'PARTICIPANT'
  | '%future added value';

export type FileBrowser = {
  __typename?: 'FileBrowser';
  readDir: FileBrowserEntryConnection;
  readMeta: Maybe<FileBrowserEntry>;
};


export type FileBrowserReadDirArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
};


export type FileBrowserReadMetaArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};

export type FileBrowserDirectoryEntry = FileBrowserEntry & {
  __typename?: 'FileBrowserDirectoryEntry';
  kind: FileBrowserEntryKind;
  name: Scalars['String']['output'];
};

export type FileBrowserEntry = {
  kind: FileBrowserEntryKind;
  name: Scalars['String']['output'];
};

export type FileBrowserEntryConnection = {
  __typename?: 'FileBrowserEntryConnection';
  /** A list of edges. */
  edges: Array<FileBrowserEntryEdge>;
  /** A list of nodes. */
  nodes: Array<FileBrowserEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FileBrowserEntryEdge = {
  __typename?: 'FileBrowserEntryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: FileBrowserEntry;
};

export type FileBrowserEntryKind =
  | 'DIRECTORY'
  | 'FILE'
  | '%future added value';

export type FileBrowserFileEntry = FileBrowserEntry & {
  __typename?: 'FileBrowserFileEntry';
  contentLength: Scalars['Int']['output'];
  contentType: Scalars['String']['output'];
  downloadUrl: Scalars['Url']['output'];
  kind: FileBrowserEntryKind;
  mode: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type FinishUploadFile = {
  __typename?: 'FinishUploadFile';
  downloadUrl: Scalars['Url']['output'];
};

export type FinishUploadFileInput = {
  key: Scalars['String']['input'];
};

export type Forum = Node & Subscribable & {
  __typename?: 'Forum';
  createdAt: Scalars['DateTime']['output'];
  entitySubscription: Maybe<SubjectSubscription>;
  guidelines: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['Url']['output']>;
  id: Scalars['ID']['output'];
  orderingPriority: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: TopicConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ForumEntitySubscriptionArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type ForumTopicsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type ForumViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ForumConnection = {
  __typename?: 'ForumConnection';
  /** A list of edges. */
  edges: Array<ForumEdge>;
  /** A list of nodes. */
  nodes: Array<Forum>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ForumEdge = {
  __typename?: 'ForumEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Forum;
};

export type ForumSubscription = Node & SubjectSubscription & {
  __typename?: 'ForumSubscription';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  forum: Forum;
  id: Scalars['ID']['output'];
  kind: SubjectKind;
  subject: Subscribable;
  viewerCan: Scalars['Boolean']['output'];
};


export type ForumSubscriptionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type InitUploadFile = {
  __typename?: 'InitUploadFile';
  key: Scalars['String']['output'];
  uploadUrl: Scalars['Url']['output'];
};

export type InitUploadFileInput = {
  contentLength: Scalars['Int']['input'];
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCompetitionMember: CompetitionMembershipEdge;
  addEventCompetition: EventCompetitionEdge;
  addEventMember: EventMembershipEdge;
  agreeToCompetitionRule: CompetitionRuleAgreement;
  awardBadge: EntityBadgeEdge;
  completeProjectVersionFileMultipartUpload: ProjectVersionFile;
  createCommentForComment: CommentEdge;
  createCommentForTopic: CommentEdge;
  createCompetition: CompetitionEdge;
  createEvent: EventEdge;
  createForum: ForumEdge;
  createOrganization: OrganizationEdge;
  createPasswordReset: Scalars['Boolean']['output'];
  createProjectVersionFileMultipartUpload: CreateMultipartUploadResponse;
  createSubmissionVersion: ProjectVersionEdge;
  createTag: TagEdge;
  createTopicForCompetition: TopicEdge;
  createTopicForForum: TopicEdge;
  createUseCaseVersion: ProjectVersionEdge;
  deleteComment: Scalars['ID']['output'];
  deleteCompetition: Scalars['ID']['output'];
  deleteEvent: Scalars['ID']['output'];
  deleteForum: Scalars['ID']['output'];
  deleteOrganization: Scalars['ID']['output'];
  deleteTag: Scalars['ID']['output'];
  deleteTopic: Scalars['ID']['output'];
  deleteUser: Scalars['ID']['output'];
  finishUploadFile: FinishUploadFile;
  initUploadFile: InitUploadFile;
  loginUser: UserEdge;
  logoutUser: Scalars['Boolean']['output'];
  oauth2Authorize: Oauth2AuthorizeOutput;
  oauth2Refresh: Oauth2TokenOutput;
  oauth2Token: Oauth2TokenOutput;
  publishVote: VotableEdge;
  removeCompetitionMember: Scalars['ID']['output'];
  removeEventCompetition: Scalars['ID']['output'];
  removeEventMember: Scalars['ID']['output'];
  removeOrganizationMember: Scalars['ID']['output'];
  resetPassword: Scalars['Boolean']['output'];
  resetVote: VotableEdge;
  setCompetitionOrderingPriority: CompetitionEdge;
  setUserNotificationSubscription: UserEdge;
  signupUser: UserEdge;
  subscribeToSubject: SubjectSubscriptionEdge;
  transferCompetitionOwnership: Array<CompetitionMembershipEdge>;
  transferEventOwnership: Array<EventMembershipEdge>;
  transferOrganizationOwnership: Array<OrganizationMembershipEdge>;
  unsubscribeFromAllNotifications: UserEdge;
  unsubscribeFromSubject: Scalars['ID']['output'];
  unsubscribeNotificationForToken: Maybe<NotificationKind>;
  updateComment: CommentEdge;
  updateCompetition: CompetitionEdge;
  updateEvent: EventEdge;
  updateEventAgenda: EventEdge;
  updateForum: ForumEdge;
  updateOrganization: OrganizationEdge;
  updateOrganizationMembership: OrganizationMembershipEdge;
  updateTopic: Topic;
  updateUser: UserEdge;
  validateSubmissionVersion: ProjectVersionEdge;
  validateUseCaseVersion: ProjectVersionEdge;
  withdrawBadge: Scalars['ID']['output'];
};


export type MutationAddCompetitionMemberArgs = {
  competitionId: Scalars['ID']['input'];
  entityId: Scalars['ID']['input'];
};


export type MutationAddEventCompetitionArgs = {
  competitionId: Scalars['ID']['input'];
  eventId: Scalars['ID']['input'];
};


export type MutationAddEventMemberArgs = {
  entityId: Scalars['ID']['input'];
  eventId: Scalars['ID']['input'];
};


export type MutationAgreeToCompetitionRuleArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  competition: Scalars['ID']['input'];
};


export type MutationAwardBadgeArgs = {
  badge: Badge;
  entityId: Scalars['ID']['input'];
};


export type MutationCompleteProjectVersionFileMultipartUploadArgs = {
  eTags: Array<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
};


export type MutationCreateCommentForCommentArgs = {
  commentId: Scalars['ID']['input'];
  input: CreateCommentInput;
};


export type MutationCreateCommentForTopicArgs = {
  input: CreateCommentInput;
  topicId: Scalars['ID']['input'];
};


export type MutationCreateCompetitionArgs = {
  input: CreateCompetitionInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateForumArgs = {
  input: CreateForumInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreatePasswordResetArgs = {
  input: CreatePasswordResetInput;
};


export type MutationCreateProjectVersionFileMultipartUploadArgs = {
  chunks: Array<Scalars['Int']['input']>;
  contentType: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCreateSubmissionVersionArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  competitionId: Scalars['ID']['input'];
  input: UpdateSubmissionInput;
};


export type MutationCreateTagArgs = {
  entityId: Scalars['ID']['input'];
  input: CreateTagInput;
};


export type MutationCreateTopicForCompetitionArgs = {
  competitionId: Scalars['ID']['input'];
  input: CreateTopicInput;
};


export type MutationCreateTopicForForumArgs = {
  forumId: Scalars['ID']['input'];
  input: CreateTopicInput;
};


export type MutationCreateUseCaseVersionArgs = {
  competitionId: Scalars['ID']['input'];
  input: UpdateUseCaseInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteForumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['ID']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFinishUploadFileArgs = {
  input: FinishUploadFileInput;
};


export type MutationInitUploadFileArgs = {
  input: InitUploadFileInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationOauth2AuthorizeArgs = {
  input: Oauth2AuthorizeInput;
};


export type MutationOauth2RefreshArgs = {
  input: Oauth2RefreshInput;
};


export type MutationOauth2TokenArgs = {
  input: Oauth2TokenInput;
};


export type MutationPublishVoteArgs = {
  id: Scalars['ID']['input'];
  kind: VoteKind;
};


export type MutationRemoveCompetitionMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveEventCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveEventMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrganizationMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetVoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetCompetitionOrderingPriorityArgs = {
  id: Scalars['ID']['input'];
  priority: Scalars['Int']['input'];
};


export type MutationSetUserNotificationSubscriptionArgs = {
  notification: NotificationKind;
  subscribe: Scalars['Boolean']['input'];
};


export type MutationSignupUserArgs = {
  input: SignupUserInput;
};


export type MutationSubscribeToSubjectArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  subject: Scalars['ID']['input'];
};


export type MutationTransferCompetitionOwnershipArgs = {
  competitionId: Scalars['ID']['input'];
  toEntityId: Scalars['ID']['input'];
};


export type MutationTransferEventOwnershipArgs = {
  eventId: Scalars['ID']['input'];
  toEntityId: Scalars['ID']['input'];
};


export type MutationTransferOrganizationOwnershipArgs = {
  organizationId: Scalars['ID']['input'];
  toUserId: Scalars['ID']['input'];
};


export type MutationUnsubscribeFromSubjectArgs = {
  subscription: Scalars['ID']['input'];
};


export type MutationUnsubscribeNotificationForTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCommentInput;
};


export type MutationUpdateCompetitionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCompetitionInput;
};


export type MutationUpdateEventArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEventInput;
};


export type MutationUpdateEventAgendaArgs = {
  eventId: Scalars['ID']['input'];
  input: UpdateAgendaInput;
};


export type MutationUpdateForumArgs = {
  id: Scalars['ID']['input'];
  input: UpdateForumInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrganizationInput;
};


export type MutationUpdateOrganizationMembershipArgs = {
  kind: OrganizationMembershipKind;
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTopicInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationValidateSubmissionVersionArgs = {
  projectVersionId: Scalars['ID']['input'];
};


export type MutationValidateUseCaseVersionArgs = {
  projectVersionId: Scalars['ID']['input'];
};


export type MutationWithdrawBadgeArgs = {
  id: Scalars['ID']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type NotificationKind =
  | 'AWARD_BADGE'
  | 'CREATE_SUBMISSION'
  | 'CREATE_TOPIC'
  | 'REPLY_TOPIC'
  | '%future added value';

export type Oauth2AuthorizeInput = {
  clientId: Scalars['String']['input'];
  redirectUri: InputMaybe<Scalars['Url']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
};

export type Oauth2AuthorizeOutput = {
  __typename?: 'Oauth2AuthorizeOutput';
  clientError: Scalars['Boolean']['output'];
  redirectUri: Maybe<Scalars['Url']['output']>;
  unauthorized: Scalars['Boolean']['output'];
};

export type Oauth2RefreshInput = {
  clientId: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type Oauth2Token = {
  __typename?: 'Oauth2Token';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
  scope: Scalars['String']['output'];
};

export type Oauth2TokenInput = {
  clientId: Scalars['String']['input'];
  code: Scalars['String']['input'];
  redirectUri: Scalars['Url']['input'];
};

export type Oauth2TokenOutput = {
  __typename?: 'Oauth2TokenOutput';
  clientError: Scalars['Boolean']['output'];
  issued: Maybe<Oauth2Token>;
  unauthorized: Scalars['Boolean']['output'];
};

export type Organization = Entity & Node & {
  __typename?: 'Organization';
  badges: EntityBadgeConnection;
  bio: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  userMembership: Maybe<OrganizationMembership>;
  username: Scalars['String']['output'];
  users: OrganizationMembershipConnection;
  viewerCan: Scalars['Boolean']['output'];
  website: Maybe<Scalars['String']['output']>;
};


export type OrganizationBadgesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubjectSubscriptionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<SubjectKind>>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubmissionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  competitionId: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationUserMembershipArgs = {
  user: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type OrganizationUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

/** An edge in a connection. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Organization;
};

export type OrganizationMembership = Node & {
  __typename?: 'OrganizationMembership';
  id: Scalars['ID']['output'];
  kind: OrganizationMembershipKind;
  organization: Organization;
  user: User;
  viewerCan: Scalars['Boolean']['output'];
};


export type OrganizationMembershipViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type OrganizationMembershipConnection = {
  __typename?: 'OrganizationMembershipConnection';
  /** A list of edges. */
  edges: Array<OrganizationMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<OrganizationMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrganizationMembershipEdge = {
  __typename?: 'OrganizationMembershipEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: OrganizationMembership;
};

export type OrganizationMembershipKind =
  | 'ADMIN'
  | 'EDITOR'
  | 'OWNER'
  | 'READER'
  | '%future added value';

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  actingAs: InputMaybe<Scalars['UsernameOrID']['input']>;
  on: InputMaybe<Scalars['ID']['input']>;
  to: Action;
};

export type Project = {
  competition: Competition;
  id: Scalars['ID']['output'];
  latest: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionArgs = {
  version: InputMaybe<Scalars['Semver']['input']>;
};


export type ProjectVersionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersion = Node & {
  __typename?: 'ProjectVersion';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  evaluation: Maybe<ProjectVersionEvaluation>;
  fileByKind: Maybe<ProjectVersionFile>;
  files: Array<ProjectVersionFile>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  project: Project;
  pyprojectToml: Scalars['String']['output'];
  pythonRequires: Maybe<Scalars['String']['output']>;
  readme: Maybe<Scalars['String']['output']>;
  validatedAt: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Semver']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileByKindArgs = {
  kind: ProjectVersionFileKind;
};


export type ProjectVersionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersionConnection = {
  __typename?: 'ProjectVersionConnection';
  /** A list of edges. */
  edges: Array<ProjectVersionEdge>;
  /** A list of nodes. */
  nodes: Array<ProjectVersion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProjectVersionEdge = {
  __typename?: 'ProjectVersionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ProjectVersion;
};

export type ProjectVersionEvaluation = Node & {
  __typename?: 'ProjectVersionEvaluation';
  createdAt: Scalars['DateTime']['output'];
  error: Maybe<Scalars['String']['output']>;
  finalizedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  max: Scalars['Boolean']['output'];
  projectVersion: ProjectVersion;
  score: Maybe<Scalars['Float']['output']>;
  submission: Submission;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionEvaluationViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersionEvaluationConnection = {
  __typename?: 'ProjectVersionEvaluationConnection';
  /** A list of edges. */
  edges: Array<ProjectVersionEvaluationEdge>;
  /** A list of nodes. */
  nodes: Array<ProjectVersionEvaluation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProjectVersionEvaluationEdge = {
  __typename?: 'ProjectVersionEvaluationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ProjectVersionEvaluation;
};

export type ProjectVersionFile = Node & {
  __typename?: 'ProjectVersionFile';
  browse: FileBrowser;
  downloadUrl: Scalars['Url']['output'];
  id: Scalars['ID']['output'];
  kind: ProjectVersionFileKind;
  projectVersion: ProjectVersion;
  uploadUrl: Maybe<Scalars['Url']['output']>;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileDownloadUrlArgs = {
  archKind?: ArchiveKind;
};


export type ProjectVersionFileViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersionFileKind =
  | 'DATA'
  | 'PACKAGE'
  | 'SUBMISSION_EVALUATION'
  | 'TEMPLATE'
  | '%future added value';

export type Query = {
  __typename?: 'Query';
  competitionBySlug: Maybe<Competition>;
  competitions: CompetitionConnection;
  entities: EntityConnection;
  entityByUsername: Maybe<Entity>;
  eventBySlug: Maybe<Event>;
  events: EventConnection;
  forumBySlug: Maybe<Forum>;
  forums: ForumConnection;
  node: Node;
  tags: TagConnection;
  version: Version;
  viewer: User;
};


export type QueryCompetitionBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCompetitionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntitiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<EntityKind>>;
  last: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntityByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryEventBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryForumBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryForumsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type SignupUserInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  github: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  website: InputMaybe<Scalars['Url']['input']>;
};

export type SubjectKind =
  | 'COMPETITION'
  | 'FORUM'
  | 'TOPIC'
  | '%future added value';

export type SubjectSubscription = {
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  id: Scalars['ID']['output'];
  kind: SubjectKind;
  subject: Subscribable;
  viewerCan: Scalars['Boolean']['output'];
};


export type SubjectSubscriptionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type SubjectSubscriptionConnection = {
  __typename?: 'SubjectSubscriptionConnection';
  /** A list of edges. */
  edges: Array<SubjectSubscriptionEdge>;
  /** A list of nodes. */
  nodes: Array<SubjectSubscription>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubjectSubscriptionEdge = {
  __typename?: 'SubjectSubscriptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: SubjectSubscription;
};

export type Submission = Node & Project & {
  __typename?: 'Submission';
  competition: Competition;
  entity: Entity;
  id: Scalars['ID']['output'];
  latest: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type SubmissionVersionArgs = {
  version: InputMaybe<Scalars['Semver']['input']>;
};


export type SubmissionVersionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type SubmissionConnection = {
  __typename?: 'SubmissionConnection';
  /** A list of edges. */
  edges: Array<SubmissionEdge>;
  /** A list of nodes. */
  nodes: Array<Submission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubmissionEdge = {
  __typename?: 'SubmissionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Submission;
};

export type Subscribable = {
  entitySubscription: Maybe<SubjectSubscription>;
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type SubscribableEntitySubscriptionArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type SubscribableViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedComments: DeletedComment;
  newComments: CommentEdge;
  updatedComments: CommentEdge;
};


export type SubscriptionDeletedCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionNewCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUpdatedCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type TagViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** A list of nodes. */
  nodes: Array<Tag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Tag;
};

export type Topic = Node & Subscribable & Votable & {
  __typename?: 'Topic';
  author: Entity;
  commentCount: Scalars['Int']['output'];
  comments: CommentConnection;
  competition: Maybe<Competition>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entitySubscription: Maybe<SubjectSubscription>;
  forum: Maybe<Forum>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type TopicCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type TopicEntitySubscriptionArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type TopicViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type TopicConnection = {
  __typename?: 'TopicConnection';
  /** A list of edges. */
  edges: Array<TopicEdge>;
  /** A list of nodes. */
  nodes: Array<Topic>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TopicEdge = {
  __typename?: 'TopicEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  hotness: Scalars['Float']['output'];
  /** The item at the end of the edge */
  node: Topic;
};

export type TopicSubscription = Node & SubjectSubscription & {
  __typename?: 'TopicSubscription';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  id: Scalars['ID']['output'];
  kind: SubjectKind;
  subject: Subscribable;
  topic: Topic;
  viewerCan: Scalars['Boolean']['output'];
};


export type TopicSubscriptionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type UpdateAgendaInput = {
  agenda: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
};

export type UpdateCompetitionInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isPrivate: InputMaybe<Scalars['Boolean']['input']>;
  rules: InputMaybe<Scalars['String']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  tagIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isPrivate: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateForumInput = {
  description: InputMaybe<Scalars['String']['input']>;
  guidelines: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority: InputMaybe<Scalars['Int']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  github: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['Url']['input']>;
};

export type UpdateSubmissionInput = {
  pyprojectToml: Scalars['String']['input'];
  readme: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicInput = {
  description: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUseCaseInput = {
  pyprojectToml: Scalars['String']['input'];
  readme: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  github: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  jobTitle: InputMaybe<Scalars['String']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  oldPassword: InputMaybe<Scalars['String']['input']>;
  organization: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['Url']['input']>;
};

export type UseCase = Node & Project & {
  __typename?: 'UseCase';
  competition: Competition;
  id: Scalars['ID']['output'];
  latest: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type UseCaseVersionArgs = {
  version: InputMaybe<Scalars['Semver']['input']>;
};


export type UseCaseVersionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type UseCaseViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type User = Entity & Node & {
  __typename?: 'User';
  badges: EntityBadgeConnection;
  bio: Maybe<Scalars['String']['output']>;
  /** can this user perform the action on the given resource */
  can: Scalars['Boolean']['output'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entities: EntityConnection;
  github: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  jobTitle: Maybe<Scalars['String']['output']>;
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  notifications: UserNotifications;
  organization: Maybe<Scalars['String']['output']>;
  organizations: OrganizationMembershipConnection;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  topics: TopicConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website: Maybe<Scalars['String']['output']>;
};


export type UserBadgesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type UserCanArgs = {
  actingAs: InputMaybe<Scalars['UsernameOrID']['input']>;
  action: Action;
  on: InputMaybe<Scalars['ID']['input']>;
};


export type UserCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type UserEntitiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  permission: InputMaybe<Permission>;
  search: InputMaybe<Scalars['String']['input']>;
};


export type UserOrganizationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubjectSubscriptionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<SubjectKind>>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubmissionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  competitionId: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type UserTopicsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<VotableOrder>;
};


export type UserViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: User;
};

export type UserNotifications = {
  __typename?: 'UserNotifications';
  disabled: Array<NotificationKind>;
  enabled: Array<NotificationKind>;
};

export type Version = {
  __typename?: 'Version';
  current: Scalars['String']['output'];
  gitCommit: Maybe<Scalars['String']['output']>;
};

export type Votable = {
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type VotableViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

/** An edge in a connection. */
export type VotableEdge = {
  __typename?: 'VotableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Votable;
};

export type VotableOrder =
  | 'HOT'
  | 'NEWEST'
  | 'OLDEST'
  | '%future added value';

export type VoteKind =
  | 'DOWNVOTE'
  | 'UPVOTE'
  | '%future added value';

export type Get_CompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_CompetitionsQuery = { __typename?: 'Query', competitions: { __typename?: 'CompetitionConnection', edges: Array<{ __typename?: 'CompetitionEdge', node: { __typename?: 'Competition', id: string | number, slug: string, shortDescription: string } }> } };

export type Refresh_TokenMutationVariables = Exact<{
  clientId: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
}>;


export type Refresh_TokenMutation = { __typename?: 'Mutation', oauth2Refresh: { __typename?: 'Oauth2TokenOutput', clientError: boolean, unauthorized: boolean, issued: { __typename?: 'Oauth2Token', expiresIn: number, accessToken: string, refreshToken: string } | null } };


export const Get_CompetitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPETITIONS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"competitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_CompetitionsQuery, Get_CompetitionsQueryVariables>;
export const Refresh_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REFRESH_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oauth2Refresh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientError"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorized"}},{"kind":"Field","name":{"kind":"Name","value":"issued"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<Refresh_TokenMutation, Refresh_TokenMutationVariables>;