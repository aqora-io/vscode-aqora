/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<FixedOffset> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
  /** A scalar that can represent any JSON value. */
  JSON: { input: any; output: any; }
  Semver: { input: any; output: any; }
  Upload: { input: any; output: any; }
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: any; output: any; }
  UsernameOrID: { input: any; output: any; }
};

export enum Action {
  AddCompetitionMember = 'ADD_COMPETITION_MEMBER',
  AddEventCompetition = 'ADD_EVENT_COMPETITION',
  AddEventMember = 'ADD_EVENT_MEMBER',
  AwardBadge = 'AWARD_BADGE',
  CreateComment = 'CREATE_COMMENT',
  CreateCompetition = 'CREATE_COMPETITION',
  CreateCompetitionRuleAgreement = 'CREATE_COMPETITION_RULE_AGREEMENT',
  CreateEvent = 'CREATE_EVENT',
  CreateForum = 'CREATE_FORUM',
  CreateOrganization = 'CREATE_ORGANIZATION',
  CreateSubjectSubscription = 'CREATE_SUBJECT_SUBSCRIPTION',
  CreateSubmissionVersion = 'CREATE_SUBMISSION_VERSION',
  CreateTag = 'CREATE_TAG',
  CreateTopic = 'CREATE_TOPIC',
  CreateUseCaseVersion = 'CREATE_USE_CASE_VERSION',
  DeleteComment = 'DELETE_COMMENT',
  DeleteCompetition = 'DELETE_COMPETITION',
  DeleteEvent = 'DELETE_EVENT',
  DeleteForum = 'DELETE_FORUM',
  DeleteOrganization = 'DELETE_ORGANIZATION',
  DeleteSubjectSubscription = 'DELETE_SUBJECT_SUBSCRIPTION',
  DeleteTag = 'DELETE_TAG',
  DeleteTopic = 'DELETE_TOPIC',
  DeleteUser = 'DELETE_USER',
  PublishVote = 'PUBLISH_VOTE',
  ReadComment = 'READ_COMMENT',
  ReadCompetition = 'READ_COMPETITION',
  ReadCompetitionMembership = 'READ_COMPETITION_MEMBERSHIP',
  ReadCompetitionRule = 'READ_COMPETITION_RULE',
  ReadCompetitionRuleAgreement = 'READ_COMPETITION_RULE_AGREEMENT',
  ReadEvent = 'READ_EVENT',
  ReadEventCompetition = 'READ_EVENT_COMPETITION',
  ReadEventMembership = 'READ_EVENT_MEMBERSHIP',
  ReadProjectVersion = 'READ_PROJECT_VERSION',
  ReadProjectVersionEvaluation = 'READ_PROJECT_VERSION_EVALUATION',
  ReadProjectVersionFile = 'READ_PROJECT_VERSION_FILE',
  ReadSubjectSubscription = 'READ_SUBJECT_SUBSCRIPTION',
  ReadTopic = 'READ_TOPIC',
  ReadUserEmail = 'READ_USER_EMAIL',
  ReadUserNotifications = 'READ_USER_NOTIFICATIONS',
  ReadUserPermissions = 'READ_USER_PERMISSIONS',
  RemoveCompetitionMember = 'REMOVE_COMPETITION_MEMBER',
  RemoveEventCompetition = 'REMOVE_EVENT_COMPETITION',
  RemoveEventMember = 'REMOVE_EVENT_MEMBER',
  RemoveOrganizationMember = 'REMOVE_ORGANIZATION_MEMBER',
  SetCompetitionOrderingPriority = 'SET_COMPETITION_ORDERING_PRIORITY',
  TransferCompetitionOwnership = 'TRANSFER_COMPETITION_OWNERSHIP',
  TransferEventOwnership = 'TRANSFER_EVENT_OWNERSHIP',
  TransferOrganizationOwnership = 'TRANSFER_ORGANIZATION_OWNERSHIP',
  UpdateAgenda = 'UPDATE_AGENDA',
  UpdateComment = 'UPDATE_COMMENT',
  UpdateCompetition = 'UPDATE_COMPETITION',
  UpdateEvent = 'UPDATE_EVENT',
  UpdateForum = 'UPDATE_FORUM',
  UpdateOrganization = 'UPDATE_ORGANIZATION',
  UpdateOrganizationMembership = 'UPDATE_ORGANIZATION_MEMBERSHIP',
  UpdateProjectVersion = 'UPDATE_PROJECT_VERSION',
  UpdateProjectVersionFile = 'UPDATE_PROJECT_VERSION_FILE',
  UpdateTopic = 'UPDATE_TOPIC',
  UpdateUser = 'UPDATE_USER',
  UploadFiles = 'UPLOAD_FILES'
}

export enum ArchiveKind {
  Tar = 'TAR',
  Zip = 'ZIP'
}

export enum Badge {
  Paris_2024Hackers = 'PARIS_2024_HACKERS',
  Paris_2024Winners = 'PARIS_2024_WINNERS',
  Test = 'TEST'
}

export type Comment = Node & Votable & {
  __typename?: 'Comment';
  author: User;
  children: CommentConnection;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  edited: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  numChildren: Scalars['Int']['output'];
  parent?: Maybe<Comment>;
  topic: Topic;
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type CommentChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type CommentViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  banner?: Maybe<Scalars['Url']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entityRuleAgreements: CompetitionRuleAgreementConnection;
  entitySubscription?: Maybe<SubjectSubscription>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  latestRule: CompetitionRule;
  leaderboard: ProjectVersionEvaluationConnection;
  members: CompetitionMembershipConnection;
  rules: CompetitionRuleConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  submission?: Maybe<Submission>;
  submissions: SubmissionConnection;
  tags: TagConnection;
  thumbnail?: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  topics: TopicConnection;
  useCase: UseCase;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionEntityRuleAgreementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionLeaderboardArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionRulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionSubmissionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type CompetitionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum CompetitionMembershipKind {
  Host = 'HOST',
  Participant = 'PARTICIPANT'
}

export type CompetitionRule = Node & {
  __typename?: 'CompetitionRule';
  competition: Competition;
  createdAt: Scalars['DateTime']['output'];
  entityAgreement?: Maybe<CompetitionRuleAgreement>;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};


export type CompetitionRuleEntityAgreementArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEventInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateForumInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority?: InputMaybe<Scalars['Int']['input']>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type CreatePasswordResetInput = {
  usernameOrEmail: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type DeletedComment = {
  __typename?: 'DeletedComment';
  commentId: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  topicId: Scalars['ID']['output'];
};

export type Entity = {
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type EntityBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntityViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum EntityKind {
  Organization = 'ORGANIZATION',
  User = 'USER'
}

export type EntityVote = {
  __typename?: 'EntityVote';
  score: Scalars['Int']['output'];
  subject: VotableEdge;
  votedAt: Scalars['DateTime']['output'];
};

export type Event = Node & {
  __typename?: 'Event';
  agenda?: Maybe<Scalars['JSON']['output']>;
  banner?: Maybe<Scalars['Url']['output']>;
  competitions: EventCompetitionConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  members: EventMembershipConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type EventCompetitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EventMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userIsOrgMember?: InputMaybe<Scalars['ID']['input']>;
};


export type EventViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum EventMembershipKind {
  Host = 'HOST',
  Participant = 'PARTICIPANT'
}

export type FileBrowser = {
  __typename?: 'FileBrowser';
  readDir: FileBrowserEntryConnection;
  readMeta?: Maybe<FileBrowserEntry>;
};


export type FileBrowserReadDirArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type FileBrowserReadMetaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
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

export enum FileBrowserEntryKind {
  Directory = 'DIRECTORY',
  File = 'FILE'
}

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
  entitySubscription?: Maybe<SubjectSubscription>;
  icon?: Maybe<Scalars['Url']['output']>;
  id: Scalars['ID']['output'];
  orderingPriority: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: TopicConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ForumEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type ForumTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type ForumViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  unsubscribeNotificationForToken?: Maybe<NotificationKind>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  contentType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCreateSubmissionVersionArgs = {
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum NotificationKind {
  AwardBadge = 'AWARD_BADGE',
  CreateSubmission = 'CREATE_SUBMISSION',
  CreateTopic = 'CREATE_TOPIC',
  ReplyTopic = 'REPLY_TOPIC'
}

export type Oauth2AuthorizeInput = {
  clientId: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['Url']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type Oauth2AuthorizeOutput = {
  __typename?: 'Oauth2AuthorizeOutput';
  clientError: Scalars['Boolean']['output'];
  redirectUri?: Maybe<Scalars['Url']['output']>;
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
  issued?: Maybe<Oauth2Token>;
  unauthorized: Scalars['Boolean']['output'];
};

export type Organization = Entity & Node & {
  __typename?: 'Organization';
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  userMembership?: Maybe<OrganizationMembership>;
  username: Scalars['String']['output'];
  users: OrganizationMembershipConnection;
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type OrganizationBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationUserMembershipArgs = {
  user?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum OrganizationMembershipKind {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Reader = 'READER'
}

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  actingAs?: InputMaybe<Scalars['UsernameOrID']['input']>;
  on?: InputMaybe<Scalars['ID']['input']>;
  to: Action;
};

export type Project = {
  competition: Competition;
  id: Scalars['ID']['output'];
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type ProjectVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersion = Node & {
  __typename?: 'ProjectVersion';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  evaluation?: Maybe<ProjectVersionEvaluation>;
  fileByKind?: Maybe<ProjectVersionFile>;
  files: Array<ProjectVersionFile>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  project: Project;
  pyprojectToml: Scalars['String']['output'];
  pythonRequires?: Maybe<Scalars['String']['output']>;
  readme?: Maybe<Scalars['String']['output']>;
  validatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Semver']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileByKindArgs = {
  kind: ProjectVersionFileKind;
};


export type ProjectVersionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  error?: Maybe<Scalars['String']['output']>;
  finalizedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  max: Scalars['Boolean']['output'];
  projectVersion: ProjectVersion;
  score?: Maybe<Scalars['Float']['output']>;
  submission: Submission;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionEvaluationViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  uploadUrl?: Maybe<Scalars['Url']['output']>;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileDownloadUrlArgs = {
  archKind?: ArchiveKind;
};


export type ProjectVersionFileViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export enum ProjectVersionFileKind {
  Data = 'DATA',
  Package = 'PACKAGE',
  SubmissionEvaluation = 'SUBMISSION_EVALUATION',
  Template = 'TEMPLATE'
}

export type Query = {
  __typename?: 'Query';
  competitionBySlug?: Maybe<Competition>;
  competitions: CompetitionConnection;
  entities: EntityConnection;
  entityByUsername?: Maybe<Entity>;
  eventBySlug?: Maybe<Event>;
  events: EventConnection;
  forumBySlug?: Maybe<Forum>;
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
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<EntityKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntityByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryEventBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForumBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryForumsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type SignupUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['Url']['input']>;
};

export enum SubjectKind {
  Competition = 'COMPETITION',
  Forum = 'FORUM',
  Topic = 'TOPIC'
}

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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type SubmissionVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type SubmissionVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  entitySubscription?: Maybe<SubjectSubscription>;
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type SubscribableEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type SubscribableViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedComments: DeletedComment;
  newComments: CommentEdge;
  updatedComments: CommentEdge;
};


export type SubscriptionDeletedCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionNewCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUpdatedCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type TagViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  competition?: Maybe<Competition>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entitySubscription?: Maybe<SubjectSubscription>;
  forum?: Maybe<Forum>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type TopicCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type TopicEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type TopicViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type UpdateAgendaInput = {
  agenda?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
};

export type UpdateCompetitionInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateForumInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type UpdateSubmissionInput = {
  pyprojectToml: Scalars['String']['input'];
  readme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUseCaseInput = {
  pyprojectToml: Scalars['String']['input'];
  readme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type UseCase = Node & Project & {
  __typename?: 'UseCase';
  competition: Competition;
  id: Scalars['ID']['output'];
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type UseCaseVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type UseCaseVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UseCaseViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type User = Entity & Node & {
  __typename?: 'User';
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  /** can this user perform the action on the given resource */
  can: Scalars['Boolean']['output'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entities: EntityConnection;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  notifications: UserNotifications;
  organization?: Maybe<Scalars['String']['output']>;
  organizations: OrganizationMembershipConnection;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  topics: TopicConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type UserBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCanArgs = {
  actingAs?: InputMaybe<Scalars['UsernameOrID']['input']>;
  action: Action;
  on?: InputMaybe<Scalars['ID']['input']>;
};


export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type UserEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<Permission>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type UserOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type UserViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  gitCommit?: Maybe<Scalars['String']['output']>;
};

export type Votable = {
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type VotableViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

/** An edge in a connection. */
export type VotableEdge = {
  __typename?: 'VotableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Votable;
};

export enum VotableOrder {
  Hot = 'HOT',
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum VoteKind {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type Get_EntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_EntitiesQuery = { __typename?: 'Query', entities: { __typename?: 'EntityConnection', edges: Array<{ __typename?: 'EntityEdge', node: { __typename?: 'Organization', username: string, bio?: string | null, id: string } | { __typename?: 'User', username: string, bio?: string | null, id: string } }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const Get_EntitiesDocument = new TypedDocumentString(`
    query GET_ENTITIES {
  entities {
    edges {
      node {
        username
        bio
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<Get_EntitiesQuery, Get_EntitiesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<FixedOffset> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
  /** A scalar that can represent any JSON value. */
  JSON: { input: any; output: any; }
  Semver: { input: any; output: any; }
  Upload: { input: any; output: any; }
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: any; output: any; }
  UsernameOrID: { input: any; output: any; }
};

export enum Action {
  AddCompetitionMember = 'ADD_COMPETITION_MEMBER',
  AddEventCompetition = 'ADD_EVENT_COMPETITION',
  AddEventMember = 'ADD_EVENT_MEMBER',
  AwardBadge = 'AWARD_BADGE',
  CreateComment = 'CREATE_COMMENT',
  CreateCompetition = 'CREATE_COMPETITION',
  CreateCompetitionRuleAgreement = 'CREATE_COMPETITION_RULE_AGREEMENT',
  CreateEvent = 'CREATE_EVENT',
  CreateForum = 'CREATE_FORUM',
  CreateOrganization = 'CREATE_ORGANIZATION',
  CreateSubjectSubscription = 'CREATE_SUBJECT_SUBSCRIPTION',
  CreateSubmissionVersion = 'CREATE_SUBMISSION_VERSION',
  CreateTag = 'CREATE_TAG',
  CreateTopic = 'CREATE_TOPIC',
  CreateUseCaseVersion = 'CREATE_USE_CASE_VERSION',
  DeleteComment = 'DELETE_COMMENT',
  DeleteCompetition = 'DELETE_COMPETITION',
  DeleteEvent = 'DELETE_EVENT',
  DeleteForum = 'DELETE_FORUM',
  DeleteOrganization = 'DELETE_ORGANIZATION',
  DeleteSubjectSubscription = 'DELETE_SUBJECT_SUBSCRIPTION',
  DeleteTag = 'DELETE_TAG',
  DeleteTopic = 'DELETE_TOPIC',
  DeleteUser = 'DELETE_USER',
  PublishVote = 'PUBLISH_VOTE',
  ReadComment = 'READ_COMMENT',
  ReadCompetition = 'READ_COMPETITION',
  ReadCompetitionMembership = 'READ_COMPETITION_MEMBERSHIP',
  ReadCompetitionRule = 'READ_COMPETITION_RULE',
  ReadCompetitionRuleAgreement = 'READ_COMPETITION_RULE_AGREEMENT',
  ReadEvent = 'READ_EVENT',
  ReadEventCompetition = 'READ_EVENT_COMPETITION',
  ReadEventMembership = 'READ_EVENT_MEMBERSHIP',
  ReadProjectVersion = 'READ_PROJECT_VERSION',
  ReadProjectVersionEvaluation = 'READ_PROJECT_VERSION_EVALUATION',
  ReadProjectVersionFile = 'READ_PROJECT_VERSION_FILE',
  ReadSubjectSubscription = 'READ_SUBJECT_SUBSCRIPTION',
  ReadTopic = 'READ_TOPIC',
  ReadUserEmail = 'READ_USER_EMAIL',
  ReadUserNotifications = 'READ_USER_NOTIFICATIONS',
  ReadUserPermissions = 'READ_USER_PERMISSIONS',
  RemoveCompetitionMember = 'REMOVE_COMPETITION_MEMBER',
  RemoveEventCompetition = 'REMOVE_EVENT_COMPETITION',
  RemoveEventMember = 'REMOVE_EVENT_MEMBER',
  RemoveOrganizationMember = 'REMOVE_ORGANIZATION_MEMBER',
  SetCompetitionOrderingPriority = 'SET_COMPETITION_ORDERING_PRIORITY',
  TransferCompetitionOwnership = 'TRANSFER_COMPETITION_OWNERSHIP',
  TransferEventOwnership = 'TRANSFER_EVENT_OWNERSHIP',
  TransferOrganizationOwnership = 'TRANSFER_ORGANIZATION_OWNERSHIP',
  UpdateAgenda = 'UPDATE_AGENDA',
  UpdateComment = 'UPDATE_COMMENT',
  UpdateCompetition = 'UPDATE_COMPETITION',
  UpdateEvent = 'UPDATE_EVENT',
  UpdateForum = 'UPDATE_FORUM',
  UpdateOrganization = 'UPDATE_ORGANIZATION',
  UpdateOrganizationMembership = 'UPDATE_ORGANIZATION_MEMBERSHIP',
  UpdateProjectVersion = 'UPDATE_PROJECT_VERSION',
  UpdateProjectVersionFile = 'UPDATE_PROJECT_VERSION_FILE',
  UpdateTopic = 'UPDATE_TOPIC',
  UpdateUser = 'UPDATE_USER',
  UploadFiles = 'UPLOAD_FILES'
}

export enum ArchiveKind {
  Tar = 'TAR',
  Zip = 'ZIP'
}

export enum Badge {
  Paris_2024Hackers = 'PARIS_2024_HACKERS',
  Paris_2024Winners = 'PARIS_2024_WINNERS',
  Test = 'TEST'
}

export type Comment = Node & Votable & {
  __typename?: 'Comment';
  author: User;
  children: CommentConnection;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  edited: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  numChildren: Scalars['Int']['output'];
  parent?: Maybe<Comment>;
  topic: Topic;
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type CommentChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type CommentViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  banner?: Maybe<Scalars['Url']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entityRuleAgreements: CompetitionRuleAgreementConnection;
  entitySubscription?: Maybe<SubjectSubscription>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  latestRule: CompetitionRule;
  leaderboard: ProjectVersionEvaluationConnection;
  members: CompetitionMembershipConnection;
  rules: CompetitionRuleConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  submission?: Maybe<Submission>;
  submissions: SubmissionConnection;
  tags: TagConnection;
  thumbnail?: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  topics: TopicConnection;
  useCase: UseCase;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionEntityRuleAgreementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionLeaderboardArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionRulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionSubmissionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type CompetitionSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompetitionTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type CompetitionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum CompetitionMembershipKind {
  Host = 'HOST',
  Participant = 'PARTICIPANT'
}

export type CompetitionRule = Node & {
  __typename?: 'CompetitionRule';
  competition: Competition;
  createdAt: Scalars['DateTime']['output'];
  entityAgreement?: Maybe<CompetitionRuleAgreement>;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};


export type CompetitionRuleEntityAgreementArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEventInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateForumInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority?: InputMaybe<Scalars['Int']['input']>;
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
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type CreatePasswordResetInput = {
  usernameOrEmail: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type DeletedComment = {
  __typename?: 'DeletedComment';
  commentId: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  topicId: Scalars['ID']['output'];
};

export type Entity = {
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type EntityBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntitySubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EntityViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum EntityKind {
  Organization = 'ORGANIZATION',
  User = 'USER'
}

export type EntityVote = {
  __typename?: 'EntityVote';
  score: Scalars['Int']['output'];
  subject: VotableEdge;
  votedAt: Scalars['DateTime']['output'];
};

export type Event = Node & {
  __typename?: 'Event';
  agenda?: Maybe<Scalars['JSON']['output']>;
  banner?: Maybe<Scalars['Url']['output']>;
  competitions: EventCompetitionConnection;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  members: EventMembershipConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type EventCompetitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EventMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userIsOrgMember?: InputMaybe<Scalars['ID']['input']>;
};


export type EventViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum EventMembershipKind {
  Host = 'HOST',
  Participant = 'PARTICIPANT'
}

export type FileBrowser = {
  __typename?: 'FileBrowser';
  readDir: FileBrowserEntryConnection;
  readMeta?: Maybe<FileBrowserEntry>;
};


export type FileBrowserReadDirArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type FileBrowserReadMetaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
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

export enum FileBrowserEntryKind {
  Directory = 'DIRECTORY',
  File = 'FILE'
}

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
  entitySubscription?: Maybe<SubjectSubscription>;
  icon?: Maybe<Scalars['Url']['output']>;
  id: Scalars['ID']['output'];
  orderingPriority: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: TopicConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ForumEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type ForumTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type ForumViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  unsubscribeNotificationForToken?: Maybe<NotificationKind>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  contentType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCreateSubmissionVersionArgs = {
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum NotificationKind {
  AwardBadge = 'AWARD_BADGE',
  CreateSubmission = 'CREATE_SUBMISSION',
  CreateTopic = 'CREATE_TOPIC',
  ReplyTopic = 'REPLY_TOPIC'
}

export type Oauth2AuthorizeInput = {
  clientId: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['Url']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type Oauth2AuthorizeOutput = {
  __typename?: 'Oauth2AuthorizeOutput';
  clientError: Scalars['Boolean']['output'];
  redirectUri?: Maybe<Scalars['Url']['output']>;
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
  issued?: Maybe<Oauth2Token>;
  unauthorized: Scalars['Boolean']['output'];
};

export type Organization = Entity & Node & {
  __typename?: 'Organization';
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  userMembership?: Maybe<OrganizationMembership>;
  username: Scalars['String']['output'];
  users: OrganizationMembershipConnection;
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type OrganizationBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationUserMembershipArgs = {
  user?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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

export enum OrganizationMembershipKind {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Reader = 'READER'
}

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  actingAs?: InputMaybe<Scalars['UsernameOrID']['input']>;
  on?: InputMaybe<Scalars['ID']['input']>;
  to: Action;
};

export type Project = {
  competition: Competition;
  id: Scalars['ID']['output'];
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type ProjectVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersion = Node & {
  __typename?: 'ProjectVersion';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  evaluation?: Maybe<ProjectVersionEvaluation>;
  fileByKind?: Maybe<ProjectVersionFile>;
  files: Array<ProjectVersionFile>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  project: Project;
  pyprojectToml: Scalars['String']['output'];
  pythonRequires?: Maybe<Scalars['String']['output']>;
  readme?: Maybe<Scalars['String']['output']>;
  validatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Semver']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileByKindArgs = {
  kind: ProjectVersionFileKind;
};


export type ProjectVersionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  error?: Maybe<Scalars['String']['output']>;
  finalizedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  latest: Scalars['Boolean']['output'];
  max: Scalars['Boolean']['output'];
  projectVersion: ProjectVersion;
  score?: Maybe<Scalars['Float']['output']>;
  submission: Submission;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionEvaluationViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  uploadUrl?: Maybe<Scalars['Url']['output']>;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionFileDownloadUrlArgs = {
  archKind?: ArchiveKind;
};


export type ProjectVersionFileViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export enum ProjectVersionFileKind {
  Data = 'DATA',
  Package = 'PACKAGE',
  SubmissionEvaluation = 'SUBMISSION_EVALUATION',
  Template = 'TEMPLATE'
}

export type Query = {
  __typename?: 'Query';
  competitionBySlug?: Maybe<Competition>;
  competitions: CompetitionConnection;
  entities: EntityConnection;
  entityByUsername?: Maybe<Entity>;
  eventBySlug?: Maybe<Event>;
  events: EventConnection;
  forumBySlug?: Maybe<Forum>;
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
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<EntityKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntityByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryEventBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForumBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryForumsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type SignupUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['Url']['input']>;
};

export enum SubjectKind {
  Competition = 'COMPETITION',
  Forum = 'FORUM',
  Topic = 'TOPIC'
}

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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type SubmissionVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type SubmissionVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SubmissionViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  entitySubscription?: Maybe<SubjectSubscription>;
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type SubscribableEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type SubscribableViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedComments: DeletedComment;
  newComments: CommentEdge;
  updatedComments: CommentEdge;
};


export type SubscriptionDeletedCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionNewCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUpdatedCommentsArgs = {
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type TagViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  competition?: Maybe<Competition>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entitySubscription?: Maybe<SubjectSubscription>;
  forum?: Maybe<Forum>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type TopicCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type TopicEntitySubscriptionArgs = {
  entity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type TopicViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type UpdateAgendaInput = {
  agenda?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
};

export type UpdateCompetitionInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventInput = {
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateForumInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  orderingPriority?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type UpdateSubmissionInput = {
  pyprojectToml: Scalars['String']['input'];
  readme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUseCaseInput = {
  pyprojectToml: Scalars['String']['input'];
  readme?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['Url']['input']>;
};

export type UseCase = Node & Project & {
  __typename?: 'UseCase';
  competition: Competition;
  id: Scalars['ID']['output'];
  latest?: Maybe<ProjectVersion>;
  name: Scalars['String']['output'];
  version?: Maybe<ProjectVersion>;
  versions: ProjectVersionConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type UseCaseVersionArgs = {
  version?: InputMaybe<Scalars['Semver']['input']>;
};


export type UseCaseVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UseCaseViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type User = Entity & Node & {
  __typename?: 'User';
  badges: EntityBadgeConnection;
  bio?: Maybe<Scalars['String']['output']>;
  /** can this user perform the action on the given resource */
  can: Scalars['Boolean']['output'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entities: EntityConnection;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['Url']['output']>;
  imageThumbnail?: Maybe<Scalars['Url']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  kind: EntityKind;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  notifications: UserNotifications;
  organization?: Maybe<Scalars['String']['output']>;
  organizations: OrganizationMembershipConnection;
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  topics: TopicConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type UserBadgesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCanArgs = {
  actingAs?: InputMaybe<Scalars['UsernameOrID']['input']>;
  action: Action;
  on?: InputMaybe<Scalars['ID']['input']>;
};


export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type UserEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  permission?: InputMaybe<Permission>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type UserOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubjectSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds?: InputMaybe<Array<SubjectKind>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  competitionId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTopicsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<VotableOrder>;
};


export type UserViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  gitCommit?: Maybe<Scalars['String']['output']>;
};

export type Votable = {
  id: Scalars['ID']['output'];
  viewerCan: Scalars['Boolean']['output'];
  voted?: Maybe<EntityVote>;
  votes: Scalars['Int']['output'];
};


export type VotableViewerCanArgs = {
  action: Action;
  asEntity?: InputMaybe<Scalars['UsernameOrID']['input']>;
};

/** An edge in a connection. */
export type VotableEdge = {
  __typename?: 'VotableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Votable;
};

export enum VotableOrder {
  Hot = 'HOT',
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum VoteKind {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type Get_EntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_EntitiesQuery = { __typename?: 'Query', entities: { __typename?: 'EntityConnection', edges: Array<{ __typename?: 'EntityEdge', node: { __typename?: 'Organization', username: string, bio?: string | null, id: string } | { __typename?: 'User', username: string, bio?: string | null, id: string } }> } };

export type CommentKeySpecifier = ('author' | 'children' | 'content' | 'createdAt' | 'edited' | 'id' | 'numChildren' | 'parent' | 'topic' | 'viewerCan' | 'voted' | 'votes' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	edited?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	numChildren?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	voted?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'hotness' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hotness?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionKeySpecifier = ('banner' | 'createdAt' | 'description' | 'entityRuleAgreements' | 'entitySubscription' | 'host' | 'id' | 'isPrivate' | 'latestRule' | 'leaderboard' | 'members' | 'rules' | 'shortDescription' | 'slug' | 'submission' | 'submissions' | 'tags' | 'thumbnail' | 'title' | 'topics' | 'useCase' | 'viewerCan' | CompetitionKeySpecifier)[];
export type CompetitionFieldPolicy = {
	banner?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entityRuleAgreements?: FieldPolicy<any> | FieldReadFunction<any>,
	entitySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	latestRule?: FieldPolicy<any> | FieldReadFunction<any>,
	leaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	rules?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>,
	submissions?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	useCase?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CompetitionConnectionKeySpecifier)[];
export type CompetitionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionEdgeKeySpecifier = ('cursor' | 'node' | CompetitionEdgeKeySpecifier)[];
export type CompetitionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionMembershipKeySpecifier = ('competition' | 'entity' | 'id' | 'kind' | 'viewerCan' | CompetitionMembershipKeySpecifier)[];
export type CompetitionMembershipFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionMembershipConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CompetitionMembershipConnectionKeySpecifier)[];
export type CompetitionMembershipConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionMembershipEdgeKeySpecifier = ('cursor' | 'node' | CompetitionMembershipEdgeKeySpecifier)[];
export type CompetitionMembershipEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleKeySpecifier = ('competition' | 'createdAt' | 'entityAgreement' | 'id' | 'text' | CompetitionRuleKeySpecifier)[];
export type CompetitionRuleFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entityAgreement?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleAgreementKeySpecifier = ('competitionRule' | 'createdAt' | 'entity' | 'id' | CompetitionRuleAgreementKeySpecifier)[];
export type CompetitionRuleAgreementFieldPolicy = {
	competitionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleAgreementConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CompetitionRuleAgreementConnectionKeySpecifier)[];
export type CompetitionRuleAgreementConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleAgreementEdgeKeySpecifier = ('cursor' | 'node' | CompetitionRuleAgreementEdgeKeySpecifier)[];
export type CompetitionRuleAgreementEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CompetitionRuleConnectionKeySpecifier)[];
export type CompetitionRuleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionRuleEdgeKeySpecifier = ('cursor' | 'node' | CompetitionRuleEdgeKeySpecifier)[];
export type CompetitionRuleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompetitionSubscriptionKeySpecifier = ('competition' | 'createdAt' | 'entity' | 'id' | 'kind' | 'subject' | 'viewerCan' | CompetitionSubscriptionKeySpecifier)[];
export type CompetitionSubscriptionFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMultipartUploadResponseKeySpecifier = ('uploadId' | 'urls' | CreateMultipartUploadResponseKeySpecifier)[];
export type CreateMultipartUploadResponseFieldPolicy = {
	uploadId?: FieldPolicy<any> | FieldReadFunction<any>,
	urls?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletedCommentKeySpecifier = ('commentId' | 'parentId' | 'topicId' | DeletedCommentKeySpecifier)[];
export type DeletedCommentFieldPolicy = {
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	topicId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityKeySpecifier = ('badges' | 'bio' | 'createdAt' | 'displayName' | 'github' | 'id' | 'image' | 'imageThumbnail' | 'kind' | 'linkedin' | 'location' | 'subjectSubscriptions' | 'submissions' | 'username' | 'viewerCan' | 'website' | EntityKeySpecifier)[];
export type EntityFieldPolicy = {
	badges?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	github?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageThumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	subjectSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	submissions?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityBadgeKeySpecifier = ('badge' | 'createdAt' | 'id' | EntityBadgeKeySpecifier)[];
export type EntityBadgeFieldPolicy = {
	badge?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityBadgeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EntityBadgeConnectionKeySpecifier)[];
export type EntityBadgeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityBadgeEdgeKeySpecifier = ('cursor' | 'node' | EntityBadgeEdgeKeySpecifier)[];
export type EntityBadgeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EntityConnectionKeySpecifier)[];
export type EntityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityEdgeKeySpecifier = ('cursor' | 'node' | EntityEdgeKeySpecifier)[];
export type EntityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityVoteKeySpecifier = ('score' | 'subject' | 'votedAt' | EntityVoteKeySpecifier)[];
export type EntityVoteFieldPolicy = {
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	votedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('agenda' | 'banner' | 'competitions' | 'createdAt' | 'description' | 'host' | 'id' | 'isPrivate' | 'members' | 'shortDescription' | 'slug' | 'thumbnail' | 'title' | 'viewerCan' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	agenda?: FieldPolicy<any> | FieldReadFunction<any>,
	banner?: FieldPolicy<any> | FieldReadFunction<any>,
	competitions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventCompetitionKeySpecifier = ('competition' | 'event' | 'id' | 'viewerCan' | EventCompetitionKeySpecifier)[];
export type EventCompetitionFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventCompetitionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EventCompetitionConnectionKeySpecifier)[];
export type EventCompetitionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventCompetitionEdgeKeySpecifier = ('cursor' | 'node' | EventCompetitionEdgeKeySpecifier)[];
export type EventCompetitionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EventConnectionKeySpecifier)[];
export type EventConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventEdgeKeySpecifier = ('cursor' | 'node' | EventEdgeKeySpecifier)[];
export type EventEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventMembershipKeySpecifier = ('entity' | 'event' | 'id' | 'kind' | 'viewerCan' | EventMembershipKeySpecifier)[];
export type EventMembershipFieldPolicy = {
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventMembershipConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EventMembershipConnectionKeySpecifier)[];
export type EventMembershipConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventMembershipEdgeKeySpecifier = ('cursor' | 'node' | EventMembershipEdgeKeySpecifier)[];
export type EventMembershipEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserKeySpecifier = ('readDir' | 'readMeta' | FileBrowserKeySpecifier)[];
export type FileBrowserFieldPolicy = {
	readDir?: FieldPolicy<any> | FieldReadFunction<any>,
	readMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserDirectoryEntryKeySpecifier = ('kind' | 'name' | FileBrowserDirectoryEntryKeySpecifier)[];
export type FileBrowserDirectoryEntryFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserEntryKeySpecifier = ('kind' | 'name' | FileBrowserEntryKeySpecifier)[];
export type FileBrowserEntryFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserEntryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | FileBrowserEntryConnectionKeySpecifier)[];
export type FileBrowserEntryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserEntryEdgeKeySpecifier = ('cursor' | 'node' | FileBrowserEntryEdgeKeySpecifier)[];
export type FileBrowserEntryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileBrowserFileEntryKeySpecifier = ('contentLength' | 'contentType' | 'downloadUrl' | 'kind' | 'mode' | 'name' | FileBrowserFileEntryKeySpecifier)[];
export type FileBrowserFileEntryFieldPolicy = {
	contentLength?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinishUploadFileKeySpecifier = ('downloadUrl' | FinishUploadFileKeySpecifier)[];
export type FinishUploadFileFieldPolicy = {
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForumKeySpecifier = ('createdAt' | 'entitySubscription' | 'icon' | 'id' | 'orderingPriority' | 'shortDescription' | 'slug' | 'title' | 'topics' | 'viewerCan' | ForumKeySpecifier)[];
export type ForumFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entitySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orderingPriority?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForumConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ForumConnectionKeySpecifier)[];
export type ForumConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForumEdgeKeySpecifier = ('cursor' | 'node' | ForumEdgeKeySpecifier)[];
export type ForumEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForumSubscriptionKeySpecifier = ('createdAt' | 'entity' | 'forum' | 'id' | 'kind' | 'subject' | 'viewerCan' | ForumSubscriptionKeySpecifier)[];
export type ForumSubscriptionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	forum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InitUploadFileKeySpecifier = ('key' | 'uploadUrl' | InitUploadFileKeySpecifier)[];
export type InitUploadFileFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCompetitionMember' | 'addEventCompetition' | 'addEventMember' | 'agreeToCompetitionRule' | 'awardBadge' | 'completeProjectVersionFileMultipartUpload' | 'createCommentForComment' | 'createCommentForTopic' | 'createCompetition' | 'createEvent' | 'createForum' | 'createOrganization' | 'createPasswordReset' | 'createProjectVersionFileMultipartUpload' | 'createSubmissionVersion' | 'createTag' | 'createTopicForCompetition' | 'createTopicForForum' | 'createUseCaseVersion' | 'deleteComment' | 'deleteCompetition' | 'deleteEvent' | 'deleteForum' | 'deleteOrganization' | 'deleteTag' | 'deleteTopic' | 'deleteUser' | 'finishUploadFile' | 'initUploadFile' | 'loginUser' | 'logoutUser' | 'oauth2Authorize' | 'oauth2Refresh' | 'oauth2Token' | 'publishVote' | 'removeCompetitionMember' | 'removeEventCompetition' | 'removeEventMember' | 'removeOrganizationMember' | 'resetPassword' | 'resetVote' | 'setCompetitionOrderingPriority' | 'setUserNotificationSubscription' | 'signupUser' | 'subscribeToSubject' | 'transferCompetitionOwnership' | 'transferEventOwnership' | 'transferOrganizationOwnership' | 'unsubscribeFromAllNotifications' | 'unsubscribeFromSubject' | 'unsubscribeNotificationForToken' | 'updateComment' | 'updateCompetition' | 'updateEvent' | 'updateEventAgenda' | 'updateForum' | 'updateOrganization' | 'updateOrganizationMembership' | 'updateTopic' | 'updateUser' | 'validateSubmissionVersion' | 'validateUseCaseVersion' | 'withdrawBadge' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCompetitionMember?: FieldPolicy<any> | FieldReadFunction<any>,
	addEventCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	addEventMember?: FieldPolicy<any> | FieldReadFunction<any>,
	agreeToCompetitionRule?: FieldPolicy<any> | FieldReadFunction<any>,
	awardBadge?: FieldPolicy<any> | FieldReadFunction<any>,
	completeProjectVersionFileMultipartUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentForComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentForTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	createEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	createForum?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	createPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectVersionFileMultipartUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	createSubmissionVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	createTag?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopicForCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopicForForum?: FieldPolicy<any> | FieldReadFunction<any>,
	createUseCaseVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteForum?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	finishUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	initUploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	loginUser?: FieldPolicy<any> | FieldReadFunction<any>,
	logoutUser?: FieldPolicy<any> | FieldReadFunction<any>,
	oauth2Authorize?: FieldPolicy<any> | FieldReadFunction<any>,
	oauth2Refresh?: FieldPolicy<any> | FieldReadFunction<any>,
	oauth2Token?: FieldPolicy<any> | FieldReadFunction<any>,
	publishVote?: FieldPolicy<any> | FieldReadFunction<any>,
	removeCompetitionMember?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEventCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	removeEventMember?: FieldPolicy<any> | FieldReadFunction<any>,
	removeOrganizationMember?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	resetVote?: FieldPolicy<any> | FieldReadFunction<any>,
	setCompetitionOrderingPriority?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserNotificationSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	signupUser?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribeToSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	transferCompetitionOwnership?: FieldPolicy<any> | FieldReadFunction<any>,
	transferEventOwnership?: FieldPolicy<any> | FieldReadFunction<any>,
	transferOrganizationOwnership?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribeFromAllNotifications?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribeFromSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribeNotificationForToken?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompetition?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEventAgenda?: FieldPolicy<any> | FieldReadFunction<any>,
	updateForum?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganization?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganizationMembership?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	validateSubmissionVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	validateUseCaseVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawBadge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Oauth2AuthorizeOutputKeySpecifier = ('clientError' | 'redirectUri' | 'unauthorized' | Oauth2AuthorizeOutputKeySpecifier)[];
export type Oauth2AuthorizeOutputFieldPolicy = {
	clientError?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectUri?: FieldPolicy<any> | FieldReadFunction<any>,
	unauthorized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Oauth2TokenKeySpecifier = ('accessToken' | 'expiresIn' | 'refreshToken' | 'scope' | Oauth2TokenKeySpecifier)[];
export type Oauth2TokenFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresIn?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Oauth2TokenOutputKeySpecifier = ('clientError' | 'issued' | 'unauthorized' | Oauth2TokenOutputKeySpecifier)[];
export type Oauth2TokenOutputFieldPolicy = {
	clientError?: FieldPolicy<any> | FieldReadFunction<any>,
	issued?: FieldPolicy<any> | FieldReadFunction<any>,
	unauthorized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('badges' | 'bio' | 'createdAt' | 'displayName' | 'github' | 'id' | 'image' | 'imageThumbnail' | 'kind' | 'linkedin' | 'location' | 'subjectSubscriptions' | 'submissions' | 'userMembership' | 'username' | 'users' | 'viewerCan' | 'website' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	badges?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	github?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageThumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	subjectSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	submissions?: FieldPolicy<any> | FieldReadFunction<any>,
	userMembership?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationEdgeKeySpecifier = ('cursor' | 'node' | OrganizationEdgeKeySpecifier)[];
export type OrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMembershipKeySpecifier = ('id' | 'kind' | 'organization' | 'user' | 'viewerCan' | OrganizationMembershipKeySpecifier)[];
export type OrganizationMembershipFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMembershipConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | OrganizationMembershipConnectionKeySpecifier)[];
export type OrganizationMembershipConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationMembershipEdgeKeySpecifier = ('cursor' | 'node' | OrganizationMembershipEdgeKeySpecifier)[];
export type OrganizationMembershipEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('competition' | 'id' | 'latest' | 'name' | 'version' | 'versions' | 'viewerCan' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latest?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionKeySpecifier = ('createdAt' | 'entity' | 'evaluation' | 'fileByKind' | 'files' | 'id' | 'latest' | 'project' | 'pyprojectToml' | 'pythonRequires' | 'readme' | 'validatedAt' | 'version' | 'viewerCan' | ProjectVersionKeySpecifier)[];
export type ProjectVersionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	evaluation?: FieldPolicy<any> | FieldReadFunction<any>,
	fileByKind?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latest?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	pyprojectToml?: FieldPolicy<any> | FieldReadFunction<any>,
	pythonRequires?: FieldPolicy<any> | FieldReadFunction<any>,
	readme?: FieldPolicy<any> | FieldReadFunction<any>,
	validatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ProjectVersionConnectionKeySpecifier)[];
export type ProjectVersionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionEdgeKeySpecifier = ('cursor' | 'node' | ProjectVersionEdgeKeySpecifier)[];
export type ProjectVersionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionEvaluationKeySpecifier = ('createdAt' | 'error' | 'finalizedAt' | 'id' | 'latest' | 'max' | 'projectVersion' | 'score' | 'submission' | 'viewerCan' | ProjectVersionEvaluationKeySpecifier)[];
export type ProjectVersionEvaluationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	finalizedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latest?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	projectVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>,
	submission?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionEvaluationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ProjectVersionEvaluationConnectionKeySpecifier)[];
export type ProjectVersionEvaluationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionEvaluationEdgeKeySpecifier = ('cursor' | 'node' | ProjectVersionEvaluationEdgeKeySpecifier)[];
export type ProjectVersionEvaluationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectVersionFileKeySpecifier = ('browse' | 'downloadUrl' | 'id' | 'kind' | 'projectVersion' | 'uploadUrl' | 'viewerCan' | ProjectVersionFileKeySpecifier)[];
export type ProjectVersionFileFieldPolicy = {
	browse?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	projectVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('competitionBySlug' | 'competitions' | 'entities' | 'entityByUsername' | 'eventBySlug' | 'events' | 'forumBySlug' | 'forums' | 'node' | 'tags' | 'version' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	competitionBySlug?: FieldPolicy<any> | FieldReadFunction<any>,
	competitions?: FieldPolicy<any> | FieldReadFunction<any>,
	entities?: FieldPolicy<any> | FieldReadFunction<any>,
	entityByUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	eventBySlug?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	forumBySlug?: FieldPolicy<any> | FieldReadFunction<any>,
	forums?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubjectSubscriptionKeySpecifier = ('createdAt' | 'entity' | 'id' | 'kind' | 'subject' | 'viewerCan' | SubjectSubscriptionKeySpecifier)[];
export type SubjectSubscriptionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubjectSubscriptionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | SubjectSubscriptionConnectionKeySpecifier)[];
export type SubjectSubscriptionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubjectSubscriptionEdgeKeySpecifier = ('cursor' | 'node' | SubjectSubscriptionEdgeKeySpecifier)[];
export type SubjectSubscriptionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmissionKeySpecifier = ('competition' | 'entity' | 'id' | 'latest' | 'name' | 'version' | 'versions' | 'viewerCan' | SubmissionKeySpecifier)[];
export type SubmissionFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latest?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmissionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | SubmissionConnectionKeySpecifier)[];
export type SubmissionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmissionEdgeKeySpecifier = ('cursor' | 'node' | SubmissionEdgeKeySpecifier)[];
export type SubmissionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribableKeySpecifier = ('entitySubscription' | 'id' | 'viewerCan' | SubscribableKeySpecifier)[];
export type SubscribableFieldPolicy = {
	entitySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('deletedComments' | 'newComments' | 'updatedComments' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	deletedComments?: FieldPolicy<any> | FieldReadFunction<any>,
	newComments?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedComments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('id' | 'name' | 'viewerCan' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TagConnectionKeySpecifier)[];
export type TagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagEdgeKeySpecifier = ('cursor' | 'node' | TagEdgeKeySpecifier)[];
export type TagEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('author' | 'commentCount' | 'comments' | 'competition' | 'createdAt' | 'description' | 'entitySubscription' | 'forum' | 'id' | 'title' | 'viewerCan' | 'voted' | 'votes' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entitySubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	forum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	voted?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TopicConnectionKeySpecifier)[];
export type TopicConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicEdgeKeySpecifier = ('cursor' | 'hotness' | 'node' | TopicEdgeKeySpecifier)[];
export type TopicEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hotness?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicSubscriptionKeySpecifier = ('createdAt' | 'entity' | 'id' | 'kind' | 'subject' | 'topic' | 'viewerCan' | TopicSubscriptionKeySpecifier)[];
export type TopicSubscriptionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UseCaseKeySpecifier = ('competition' | 'id' | 'latest' | 'name' | 'version' | 'versions' | 'viewerCan' | UseCaseKeySpecifier)[];
export type UseCaseFieldPolicy = {
	competition?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latest?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('badges' | 'bio' | 'can' | 'comments' | 'createdAt' | 'displayName' | 'email' | 'entities' | 'github' | 'id' | 'image' | 'imageThumbnail' | 'jobTitle' | 'kind' | 'linkedin' | 'location' | 'notifications' | 'organization' | 'organizations' | 'subjectSubscriptions' | 'submissions' | 'topics' | 'username' | 'viewerCan' | 'website' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	badges?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	can?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	entities?: FieldPolicy<any> | FieldReadFunction<any>,
	github?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageThumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	jobTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	subjectSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	submissions?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNotificationsKeySpecifier = ('disabled' | 'enabled' | UserNotificationsKeySpecifier)[];
export type UserNotificationsFieldPolicy = {
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VersionKeySpecifier = ('current' | 'gitCommit' | VersionKeySpecifier)[];
export type VersionFieldPolicy = {
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	gitCommit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotableKeySpecifier = ('id' | 'viewerCan' | 'voted' | 'votes' | VotableKeySpecifier)[];
export type VotableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerCan?: FieldPolicy<any> | FieldReadFunction<any>,
	voted?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotableEdgeKeySpecifier = ('cursor' | 'node' | VotableEdgeKeySpecifier)[];
export type VotableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	Competition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionKeySpecifier | (() => undefined | CompetitionKeySpecifier),
		fields?: CompetitionFieldPolicy,
	},
	CompetitionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionConnectionKeySpecifier | (() => undefined | CompetitionConnectionKeySpecifier),
		fields?: CompetitionConnectionFieldPolicy,
	},
	CompetitionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionEdgeKeySpecifier | (() => undefined | CompetitionEdgeKeySpecifier),
		fields?: CompetitionEdgeFieldPolicy,
	},
	CompetitionMembership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionMembershipKeySpecifier | (() => undefined | CompetitionMembershipKeySpecifier),
		fields?: CompetitionMembershipFieldPolicy,
	},
	CompetitionMembershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionMembershipConnectionKeySpecifier | (() => undefined | CompetitionMembershipConnectionKeySpecifier),
		fields?: CompetitionMembershipConnectionFieldPolicy,
	},
	CompetitionMembershipEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionMembershipEdgeKeySpecifier | (() => undefined | CompetitionMembershipEdgeKeySpecifier),
		fields?: CompetitionMembershipEdgeFieldPolicy,
	},
	CompetitionRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleKeySpecifier | (() => undefined | CompetitionRuleKeySpecifier),
		fields?: CompetitionRuleFieldPolicy,
	},
	CompetitionRuleAgreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleAgreementKeySpecifier | (() => undefined | CompetitionRuleAgreementKeySpecifier),
		fields?: CompetitionRuleAgreementFieldPolicy,
	},
	CompetitionRuleAgreementConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleAgreementConnectionKeySpecifier | (() => undefined | CompetitionRuleAgreementConnectionKeySpecifier),
		fields?: CompetitionRuleAgreementConnectionFieldPolicy,
	},
	CompetitionRuleAgreementEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleAgreementEdgeKeySpecifier | (() => undefined | CompetitionRuleAgreementEdgeKeySpecifier),
		fields?: CompetitionRuleAgreementEdgeFieldPolicy,
	},
	CompetitionRuleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleConnectionKeySpecifier | (() => undefined | CompetitionRuleConnectionKeySpecifier),
		fields?: CompetitionRuleConnectionFieldPolicy,
	},
	CompetitionRuleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionRuleEdgeKeySpecifier | (() => undefined | CompetitionRuleEdgeKeySpecifier),
		fields?: CompetitionRuleEdgeFieldPolicy,
	},
	CompetitionSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompetitionSubscriptionKeySpecifier | (() => undefined | CompetitionSubscriptionKeySpecifier),
		fields?: CompetitionSubscriptionFieldPolicy,
	},
	CreateMultipartUploadResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMultipartUploadResponseKeySpecifier | (() => undefined | CreateMultipartUploadResponseKeySpecifier),
		fields?: CreateMultipartUploadResponseFieldPolicy,
	},
	DeletedComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletedCommentKeySpecifier | (() => undefined | DeletedCommentKeySpecifier),
		fields?: DeletedCommentFieldPolicy,
	},
	Entity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityKeySpecifier | (() => undefined | EntityKeySpecifier),
		fields?: EntityFieldPolicy,
	},
	EntityBadge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityBadgeKeySpecifier | (() => undefined | EntityBadgeKeySpecifier),
		fields?: EntityBadgeFieldPolicy,
	},
	EntityBadgeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityBadgeConnectionKeySpecifier | (() => undefined | EntityBadgeConnectionKeySpecifier),
		fields?: EntityBadgeConnectionFieldPolicy,
	},
	EntityBadgeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityBadgeEdgeKeySpecifier | (() => undefined | EntityBadgeEdgeKeySpecifier),
		fields?: EntityBadgeEdgeFieldPolicy,
	},
	EntityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityConnectionKeySpecifier | (() => undefined | EntityConnectionKeySpecifier),
		fields?: EntityConnectionFieldPolicy,
	},
	EntityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityEdgeKeySpecifier | (() => undefined | EntityEdgeKeySpecifier),
		fields?: EntityEdgeFieldPolicy,
	},
	EntityVote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityVoteKeySpecifier | (() => undefined | EntityVoteKeySpecifier),
		fields?: EntityVoteFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventCompetition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventCompetitionKeySpecifier | (() => undefined | EventCompetitionKeySpecifier),
		fields?: EventCompetitionFieldPolicy,
	},
	EventCompetitionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventCompetitionConnectionKeySpecifier | (() => undefined | EventCompetitionConnectionKeySpecifier),
		fields?: EventCompetitionConnectionFieldPolicy,
	},
	EventCompetitionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventCompetitionEdgeKeySpecifier | (() => undefined | EventCompetitionEdgeKeySpecifier),
		fields?: EventCompetitionEdgeFieldPolicy,
	},
	EventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventConnectionKeySpecifier | (() => undefined | EventConnectionKeySpecifier),
		fields?: EventConnectionFieldPolicy,
	},
	EventEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventEdgeKeySpecifier | (() => undefined | EventEdgeKeySpecifier),
		fields?: EventEdgeFieldPolicy,
	},
	EventMembership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventMembershipKeySpecifier | (() => undefined | EventMembershipKeySpecifier),
		fields?: EventMembershipFieldPolicy,
	},
	EventMembershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventMembershipConnectionKeySpecifier | (() => undefined | EventMembershipConnectionKeySpecifier),
		fields?: EventMembershipConnectionFieldPolicy,
	},
	EventMembershipEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventMembershipEdgeKeySpecifier | (() => undefined | EventMembershipEdgeKeySpecifier),
		fields?: EventMembershipEdgeFieldPolicy,
	},
	FileBrowser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserKeySpecifier | (() => undefined | FileBrowserKeySpecifier),
		fields?: FileBrowserFieldPolicy,
	},
	FileBrowserDirectoryEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserDirectoryEntryKeySpecifier | (() => undefined | FileBrowserDirectoryEntryKeySpecifier),
		fields?: FileBrowserDirectoryEntryFieldPolicy,
	},
	FileBrowserEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserEntryKeySpecifier | (() => undefined | FileBrowserEntryKeySpecifier),
		fields?: FileBrowserEntryFieldPolicy,
	},
	FileBrowserEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserEntryConnectionKeySpecifier | (() => undefined | FileBrowserEntryConnectionKeySpecifier),
		fields?: FileBrowserEntryConnectionFieldPolicy,
	},
	FileBrowserEntryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserEntryEdgeKeySpecifier | (() => undefined | FileBrowserEntryEdgeKeySpecifier),
		fields?: FileBrowserEntryEdgeFieldPolicy,
	},
	FileBrowserFileEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileBrowserFileEntryKeySpecifier | (() => undefined | FileBrowserFileEntryKeySpecifier),
		fields?: FileBrowserFileEntryFieldPolicy,
	},
	FinishUploadFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinishUploadFileKeySpecifier | (() => undefined | FinishUploadFileKeySpecifier),
		fields?: FinishUploadFileFieldPolicy,
	},
	Forum?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForumKeySpecifier | (() => undefined | ForumKeySpecifier),
		fields?: ForumFieldPolicy,
	},
	ForumConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForumConnectionKeySpecifier | (() => undefined | ForumConnectionKeySpecifier),
		fields?: ForumConnectionFieldPolicy,
	},
	ForumEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForumEdgeKeySpecifier | (() => undefined | ForumEdgeKeySpecifier),
		fields?: ForumEdgeFieldPolicy,
	},
	ForumSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForumSubscriptionKeySpecifier | (() => undefined | ForumSubscriptionKeySpecifier),
		fields?: ForumSubscriptionFieldPolicy,
	},
	InitUploadFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InitUploadFileKeySpecifier | (() => undefined | InitUploadFileKeySpecifier),
		fields?: InitUploadFileFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Oauth2AuthorizeOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Oauth2AuthorizeOutputKeySpecifier | (() => undefined | Oauth2AuthorizeOutputKeySpecifier),
		fields?: Oauth2AuthorizeOutputFieldPolicy,
	},
	Oauth2Token?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Oauth2TokenKeySpecifier | (() => undefined | Oauth2TokenKeySpecifier),
		fields?: Oauth2TokenFieldPolicy,
	},
	Oauth2TokenOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Oauth2TokenOutputKeySpecifier | (() => undefined | Oauth2TokenOutputKeySpecifier),
		fields?: Oauth2TokenOutputFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationEdgeKeySpecifier | (() => undefined | OrganizationEdgeKeySpecifier),
		fields?: OrganizationEdgeFieldPolicy,
	},
	OrganizationMembership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMembershipKeySpecifier | (() => undefined | OrganizationMembershipKeySpecifier),
		fields?: OrganizationMembershipFieldPolicy,
	},
	OrganizationMembershipConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMembershipConnectionKeySpecifier | (() => undefined | OrganizationMembershipConnectionKeySpecifier),
		fields?: OrganizationMembershipConnectionFieldPolicy,
	},
	OrganizationMembershipEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationMembershipEdgeKeySpecifier | (() => undefined | OrganizationMembershipEdgeKeySpecifier),
		fields?: OrganizationMembershipEdgeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionKeySpecifier | (() => undefined | ProjectVersionKeySpecifier),
		fields?: ProjectVersionFieldPolicy,
	},
	ProjectVersionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionConnectionKeySpecifier | (() => undefined | ProjectVersionConnectionKeySpecifier),
		fields?: ProjectVersionConnectionFieldPolicy,
	},
	ProjectVersionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionEdgeKeySpecifier | (() => undefined | ProjectVersionEdgeKeySpecifier),
		fields?: ProjectVersionEdgeFieldPolicy,
	},
	ProjectVersionEvaluation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionEvaluationKeySpecifier | (() => undefined | ProjectVersionEvaluationKeySpecifier),
		fields?: ProjectVersionEvaluationFieldPolicy,
	},
	ProjectVersionEvaluationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionEvaluationConnectionKeySpecifier | (() => undefined | ProjectVersionEvaluationConnectionKeySpecifier),
		fields?: ProjectVersionEvaluationConnectionFieldPolicy,
	},
	ProjectVersionEvaluationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionEvaluationEdgeKeySpecifier | (() => undefined | ProjectVersionEvaluationEdgeKeySpecifier),
		fields?: ProjectVersionEvaluationEdgeFieldPolicy,
	},
	ProjectVersionFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectVersionFileKeySpecifier | (() => undefined | ProjectVersionFileKeySpecifier),
		fields?: ProjectVersionFileFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	SubjectSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubjectSubscriptionKeySpecifier | (() => undefined | SubjectSubscriptionKeySpecifier),
		fields?: SubjectSubscriptionFieldPolicy,
	},
	SubjectSubscriptionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubjectSubscriptionConnectionKeySpecifier | (() => undefined | SubjectSubscriptionConnectionKeySpecifier),
		fields?: SubjectSubscriptionConnectionFieldPolicy,
	},
	SubjectSubscriptionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubjectSubscriptionEdgeKeySpecifier | (() => undefined | SubjectSubscriptionEdgeKeySpecifier),
		fields?: SubjectSubscriptionEdgeFieldPolicy,
	},
	Submission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmissionKeySpecifier | (() => undefined | SubmissionKeySpecifier),
		fields?: SubmissionFieldPolicy,
	},
	SubmissionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmissionConnectionKeySpecifier | (() => undefined | SubmissionConnectionKeySpecifier),
		fields?: SubmissionConnectionFieldPolicy,
	},
	SubmissionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmissionEdgeKeySpecifier | (() => undefined | SubmissionEdgeKeySpecifier),
		fields?: SubmissionEdgeFieldPolicy,
	},
	Subscribable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribableKeySpecifier | (() => undefined | SubscribableKeySpecifier),
		fields?: SubscribableFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	TagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionKeySpecifier | (() => undefined | TagConnectionKeySpecifier),
		fields?: TagConnectionFieldPolicy,
	},
	TagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagEdgeKeySpecifier | (() => undefined | TagEdgeKeySpecifier),
		fields?: TagEdgeFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	TopicConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicConnectionKeySpecifier | (() => undefined | TopicConnectionKeySpecifier),
		fields?: TopicConnectionFieldPolicy,
	},
	TopicEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicEdgeKeySpecifier | (() => undefined | TopicEdgeKeySpecifier),
		fields?: TopicEdgeFieldPolicy,
	},
	TopicSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicSubscriptionKeySpecifier | (() => undefined | TopicSubscriptionKeySpecifier),
		fields?: TopicSubscriptionFieldPolicy,
	},
	UseCase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UseCaseKeySpecifier | (() => undefined | UseCaseKeySpecifier),
		fields?: UseCaseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserNotifications?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserNotificationsKeySpecifier | (() => undefined | UserNotificationsKeySpecifier),
		fields?: UserNotificationsFieldPolicy,
	},
	Version?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VersionKeySpecifier | (() => undefined | VersionKeySpecifier),
		fields?: VersionFieldPolicy,
	},
	Votable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotableKeySpecifier | (() => undefined | VotableKeySpecifier),
		fields?: VotableFieldPolicy,
	},
	VotableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotableEdgeKeySpecifier | (() => undefined | VotableEdgeKeySpecifier),
		fields?: VotableEdgeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;