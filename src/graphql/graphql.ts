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
  DateTime: { input: Date; output: Date; }
  /** A scalar that can represent any JSON value. */
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
  /**
   * ISO 8601 calendar date without timezone.
   * Format: %Y-%m-%d
   *
   * # Examples
   *
   * * `1994-11-13`
   * * `2000-02-24`
   */
  NaiveDate: { input: Date; output: Date; }
  Semver: { input: `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}` | `${number}.${number}.${number}+${string}` | `${number}.${number}.${number}-${string}+${string}`; output: `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}` | `${number}.${number}.${number}+${string}` | `${number}.${number}.${number}-${string}+${string}`; }
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as
   * Strings within GraphQL. UUIDs are used to assign unique identifiers to
   * entities without requiring a central allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: { input: string; output: string; }
  Upload: { input: { filename: string, content_type?: string, content: File  }; output: { filename: string, content_type?: string, content: File  }; }
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: URL; output: URL; }
  UsernameOrID: { input: string; output: string; }
};

export type Action =
  | 'ACCEPT_EVENT_INVITE'
  | 'ADD_COMPETITION_MEMBER'
  | 'ADD_EVENT_COMPETITION'
  | 'ADD_EVENT_MEMBER'
  | 'AWARD_BADGE'
  | 'CREATE_BLOG_ARTICLE'
  | 'CREATE_COMMENT'
  | 'CREATE_COMPETITION'
  | 'CREATE_COMPETITION_RULE_AGREEMENT'
  | 'CREATE_EVENT'
  | 'CREATE_EVENT_RULE_AGREEMENT'
  | 'CREATE_FORUM'
  | 'CREATE_ORGANIZATION'
  | 'CREATE_PROJECT_VERSION_APPROVAL'
  | 'CREATE_SUBJECT_SUBSCRIPTION'
  | 'CREATE_SUBMISSION_VERSION'
  | 'CREATE_TAG'
  | 'CREATE_TOPIC'
  | 'CREATE_USE_CASE_VERSION'
  | 'DELETE_BLOG_ARTICLE'
  | 'DELETE_COMMENT'
  | 'DELETE_COMPETITION'
  | 'DELETE_EVENT'
  | 'DELETE_FORUM'
  | 'DELETE_ORGANIZATION'
  | 'DELETE_PROJECT_VERSION_APPROVAL'
  | 'DELETE_SUBJECT_SUBSCRIPTION'
  | 'DELETE_TAG'
  | 'DELETE_TOPIC'
  | 'DELETE_USER'
  | 'FETCH_WEBSITE_METADATA'
  | 'JOIN_COMPETITION'
  | 'JOIN_EVENT'
  | 'MANAGE_EVENT_INVITE_CODE'
  | 'PUBLISH_VOTE'
  | 'READ_ACTIVITY_TRACKER'
  | 'READ_COMMENT'
  | 'READ_COMPETITION'
  | 'READ_COMPETITION_MEMBERSHIP'
  | 'READ_COMPETITION_RULE'
  | 'READ_COMPETITION_RULE_AGREEMENT'
  | 'READ_EVENT'
  | 'READ_EVENT_COMPETITION'
  | 'READ_EVENT_MEMBERSHIP'
  | 'READ_EVENT_RULE'
  | 'READ_EVENT_RULE_AGREEMENT'
  | 'READ_PROJECT_VERSION'
  | 'READ_PROJECT_VERSION_APPROVAL'
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
  | 'UPDATE_BLOG_ARTICLE'
  | 'UPDATE_COMMENT'
  | 'UPDATE_COMPETITION'
  | 'UPDATE_COMPETITION_ACCESS'
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

export type Activity = {
  __typename?: 'Activity';
  date: Scalars['NaiveDate']['output'];
  level: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  /** A list of edges. */
  edges: Array<ActivityEdge>;
  /** A list of nodes. */
  nodes: Array<Activity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Activity;
};

export type ActivityVisibility =
  /** Activity is visible by every authenticated user. */
  | 'AUTHENTICATED'
  /** Activity is only visible to invited members. */
  | 'MEMBERS'
  /** Activity is visible by everyone, even unauthenticated users. */
  | 'UNAUTHENTICATED'
  | '%future added value';

export type ArchiveKind =
  | 'TAR'
  | 'ZIP'
  | '%future added value';

export type Badge =
  /** BIG Quantum Hackathon by QuantX, October 2021, Paris (FR) */
  | 'BIG_PARIS_2021'
  /** BIG Quantum Hackathon by the Chicago Quantum Exchange & QuantX, Sept 2023, Chicago (USA) */
  | 'CHICAGO_2023'
  /** Quantum Hackathon by QuantX, October 2022, Grenoble (FR) */
  | 'GRENOBLE_2022'
  /** Clinical Trial Optimization Competition 2024 by Ingenii First Prize */
  | 'INGENII_2024_FIRST'
  /** Clinical Trial Optimization Competition 2024 by Ingenii Participant */
  | 'INGENII_2024_OTHERS'
  /** Clinical Trial Optimization Competition 2024 by Ingenii Second Prize */
  | 'INGENII_2024_SECOND'
  /** Clinical Trial Optimization Competition 2024 by Ingenii Special Prize */
  | 'INGENII_2024_SPECIAL'
  /** Clinical Trial Optimization Competition 2024 by Ingenii Third Prize */
  | 'INGENII_2024_THIRD'
  /** Quantum Hackathon by Québec Quantique & QuantX, June 2022, Montreal (CAN) */
  | 'MONTREAL_2022'
  /** Quantum hackathon by QuantX, March 2021, Paris (FR) */
  | 'PARIS_2021'
  /** BIG QC-AI-HPC Hackathon by QuantX, March 2023, Paris (FR) */
  | 'PARIS_2023'
  /** BIG Quantum Hackathon Sports Edition by QuantX & Aqora, May 2024, Paris (FR) */
  | 'PARIS_2024_HACKERS'
  /** BIG Quantum Hackathon Sports Edition by QuantX & Aqora, May 2024, Paris (FR) */
  | 'PARIS_2024_WINNERS'
  /** Hackathon Trailblazer - 3rd Place Team - Q2B Silicon Valley 2024 */
  | 'Q2B2024_BRONZE'
  /** Hackathon Champion - Q2B Silicon Valley 2024 */
  | 'Q2B2024_GOLD'
  /** On-Site Participant - Q2B Hackathon 2024 */
  | 'Q2B2024_ONSITE'
  /** Global Participant - Q2B Hackathon 2024 */
  | 'Q2B2024_REMOTE'
  /** Hackathon Innovator - 2nd Place Team - Q2B Silicon Valley 2024 */
  | 'Q2B2024_SILVER'
  /** Badge awarded upon first submission */
  | 'QUANTUM_PIONEER'
  | 'TEST'
  /** ICTP - Quantinuum Quantum Hackathon, April 2023, Trieste (IT) */
  | 'TRIESTE_2023'
  | '%future added value';

export type Blog = ForumOwner & {
  __typename?: 'Blog';
  forum: Forum;
  forumOwnerKind: ForumOwnerKind;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type BlogViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type BlogArticle = Node & {
  __typename?: 'BlogArticle';
  authors: BlogArticleAuthorConnection;
  blurHash: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  shortDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topic: Topic;
  viewerCan: Scalars['Boolean']['output'];
};


export type BlogArticleAuthorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type BlogArticleViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type BlogArticleAuthorConnection = {
  __typename?: 'BlogArticleAuthorConnection';
  /** A list of edges. */
  edges: Array<EntityEdge>;
  /** A list of nodes. */
  nodes: Array<Entity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogArticleConnection = {
  __typename?: 'BlogArticleConnection';
  /** A list of edges. */
  edges: Array<BlogArticleEdge>;
  /** A list of nodes. */
  nodes: Array<BlogArticle>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlogArticleEdge = {
  __typename?: 'BlogArticleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: BlogArticle;
};

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

export type Competition = ForumOwner & Node & {
  __typename?: 'Competition';
  banner: Maybe<Scalars['Url']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entityRuleAgreements: CompetitionRuleAgreementConnection;
  forum: Forum;
  forumOwnerKind: ForumOwnerKind;
  grantHostSubmissionAccess: Scalars['Boolean']['output'];
  hasLeaderboard: Scalars['Boolean']['output'];
  host: Entity;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  latestRule: CompetitionRule;
  leaderboard: ProjectVersionEvaluationConnection;
  leaderboardSize: Scalars['Int']['output'];
  members: CompetitionMembershipConnection;
  membership: Maybe<CompetitionMembership>;
  noCode: Scalars['Boolean']['output'];
  requiresApproval: Scalars['Boolean']['output'];
  rules: CompetitionRuleConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  submission: Maybe<Submission>;
  submissionPreamble: Maybe<Scalars['String']['output']>;
  submissions: SubmissionConnection;
  tags: CompetitionTagConnection;
  thumbnail: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  useCase: UseCase;
  viewerCan: Scalars['Boolean']['output'];
  visibility: ActivityVisibility;
};


export type CompetitionEntityRuleAgreementsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  latest: InputMaybe<Scalars['Boolean']['input']>;
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


export type CompetitionMembershipArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
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
  needsApproval: InputMaybe<Scalars['Boolean']['input']>;
};


export type CompetitionTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
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
  ruleAgreements: CompetitionRuleAgreementConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type CompetitionMembershipRuleAgreementsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  latest: InputMaybe<Scalars['Boolean']['input']>;
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

export type CompetitionTagConnection = {
  __typename?: 'CompetitionTagConnection';
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** A list of nodes. */
  nodes: Array<Tag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CreateBlogArticleInput = {
  authorsIds: Array<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  image: InputMaybe<Scalars['Upload']['input']>;
  seoDescription: InputMaybe<Scalars['String']['input']>;
  seoTitle: InputMaybe<Scalars['String']['input']>;
  shortDescription: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateCommentInput = {
  content: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  grantHostSubmissionAccess: InputMaybe<Scalars['Boolean']['input']>;
  hasLeaderboard: InputMaybe<Scalars['Boolean']['input']>;
  noCode: Scalars['Boolean']['input'];
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  submissionPreamble: InputMaybe<Scalars['String']['input']>;
  tagIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
  visibility: ActivityVisibility;
};

export type CreateEventInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  shortDescription: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
  visibility: ActivityVisibility;
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
  googleScholar: InputMaybe<Scalars['String']['input']>;
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
  url: InputMaybe<Scalars['Url']['input']>;
};

export type DeletedComment = {
  __typename?: 'DeletedComment';
  commentId: Scalars['ID']['output'];
  parentId: Maybe<Scalars['ID']['output']>;
  topicId: Scalars['ID']['output'];
};

export type EmailSignupRequest = Node & {
  __typename?: 'EmailSignupRequest';
  emailCanResendAt: Scalars['DateTime']['output'];
  emailSentCount: Scalars['Int']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastEmailSentAt: Scalars['DateTime']['output'];
};

export type EmailSignupVerficationInput = {
  id: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

export type Entity = {
  badges: EntityBadgeConnection;
  bio: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  github: Maybe<Scalars['String']['output']>;
  googleScholar: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  points: Scalars['Int']['output'];
  projectVersionApprovals: ProjectVersionApprovalConnection;
  rank: Scalars['Int']['output'];
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


export type EntityProjectVersionApprovalsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  projectVersionId: InputMaybe<Scalars['UUID']['input']>;
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

export type EntityActivitiesConnectionKind =
  | 'COMMENT'
  | 'SUBMISSION'
  | 'TOPIC'
  | '%future added value';

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

export type Event = ForumOwner & Node & {
  __typename?: 'Event';
  agenda: Maybe<Scalars['JSON']['output']>;
  banner: Maybe<Scalars['Url']['output']>;
  competitions: EventCompetitionConnection;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entityRuleAgreements: EventRuleAgreementConnection;
  forum: Forum;
  forumOwnerKind: ForumOwnerKind;
  host: Entity;
  id: Scalars['ID']['output'];
  invitations: EventInvitationConnection;
  invitationsCount: Scalars['Int']['output'];
  invite: EventInvite;
  isPrivate: Scalars['Boolean']['output'];
  latestRule: EventRule;
  members: EventMembershipConnection;
  membership: Maybe<EventMembership>;
  rules: EventRuleConnection;
  shortDescription: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  teams: OrganizationConnection;
  thumbnail: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  visibility: ActivityVisibility;
};


export type EventCompetitionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EventEntityRuleAgreementsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  latest: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventInvitationsArgs = {
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
};


export type EventMembershipArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type EventRulesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type EventTeamsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
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

export type EventInvitation = Node & {
  __typename?: 'EventInvitation';
  email: Scalars['String']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  organization: Maybe<Organization>;
  registeredAs: Maybe<User>;
  username: Maybe<Scalars['String']['output']>;
};

export type EventInvitationConnection = {
  __typename?: 'EventInvitationConnection';
  /** A list of edges. */
  edges: Array<EventInvitationEdge>;
  /** A list of nodes. */
  nodes: Array<EventInvitation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventInvitationEdge = {
  __typename?: 'EventInvitationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EventInvitation;
};

export type EventInvite = Node & {
  __typename?: 'EventInvite';
  code: Maybe<Scalars['String']['output']>;
  event: Event;
  id: Scalars['ID']['output'];
  latestRuleText: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  thumbnail: Maybe<Scalars['Url']['output']>;
  title: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type EventInviteViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EventMemberInvite = {
  /** Required email used to find registered members, or send invitation email otherwise. */
  email: Scalars['String']['input'];
  /** Optional team name used to create teams for the event. */
  team: InputMaybe<Scalars['String']['input']>;
  /** Optional username used to send invitation email when the member has not registered yet. */
  username: InputMaybe<Scalars['String']['input']>;
};

export type EventMembership = Node & {
  __typename?: 'EventMembership';
  entity: Entity;
  event: Event;
  id: Scalars['ID']['output'];
  kind: EventMembershipKind;
  ruleAgreements: EventRuleAgreementConnection;
  viewerCan: Scalars['Boolean']['output'];
};


export type EventMembershipRuleAgreementsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  latest: InputMaybe<Scalars['Boolean']['input']>;
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

export type EventRule = Node & {
  __typename?: 'EventRule';
  createdAt: Scalars['DateTime']['output'];
  entityAgreement: Maybe<EventRuleAgreement>;
  event: Event;
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};


export type EventRuleEntityAgreementArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type EventRuleAgreement = Node & {
  __typename?: 'EventRuleAgreement';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  eventRule: EventRule;
  id: Scalars['ID']['output'];
};

export type EventRuleAgreementConnection = {
  __typename?: 'EventRuleAgreementConnection';
  /** A list of edges. */
  edges: Array<EventRuleAgreementEdge>;
  /** A list of nodes. */
  nodes: Array<EventRuleAgreement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventRuleAgreementEdge = {
  __typename?: 'EventRuleAgreementEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EventRuleAgreement;
};

export type EventRuleConnection = {
  __typename?: 'EventRuleConnection';
  /** A list of edges. */
  edges: Array<EventRuleEdge>;
  /** A list of nodes. */
  nodes: Array<EventRule>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventRuleEdge = {
  __typename?: 'EventRuleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: EventRule;
};

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

export type Forum = ForumOwner & Node & Subscribable & {
  __typename?: 'Forum';
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entitySubscription: Maybe<SubjectSubscription>;
  forum: Forum;
  forumOwnerKind: ForumOwnerKind;
  guidelines: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['Url']['output']>;
  id: Scalars['ID']['output'];
  orderingPriority: Scalars['Int']['output'];
  owner: ForumOwner;
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

export type ForumOwner = {
  forum: Forum;
  forumOwnerKind: ForumOwnerKind;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type ForumOwnerViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ForumOwnerKind =
  | 'BLOG'
  | 'COMPETITION'
  | 'EVENT'
  | 'TOP_LEVEL'
  | '%future added value';

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

export type GlobalLeaderboardConnection = {
  __typename?: 'GlobalLeaderboardConnection';
  /** A list of edges. */
  edges: Array<GlobalLeaderboardEdge>;
  /** A list of nodes. */
  nodes: Array<Entity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GlobalLeaderboardEdge = {
  __typename?: 'GlobalLeaderboardEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Entity;
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
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
  acceptEventInvite: EventInvite;
  addCompetitionMember: CompetitionMembershipEdge;
  addEventCompetition: EventCompetitionEdge;
  addEventMember: EventMembershipEdge;
  agreeToCompetitionRule: CompetitionRuleAgreement;
  agreeToEventRule: EventRuleAgreement;
  awardBadge: EntityBadgeEdge;
  checkEmailSignupVerification: EmailSignupRequest;
  completeProjectVersionFileMultipartUpload: ProjectVersionFile;
  createBlogArticle: BlogArticleEdge;
  createCommentForComment: CommentEdge;
  createCommentForTopic: CommentEdge;
  createCompetition: CompetitionEdge;
  createEvent: EventEdge;
  createForum: ForumEdge;
  createOrganization: OrganizationEdge;
  createPasswordReset: Scalars['Boolean']['output'];
  createProjectVersionApproval: ProjectVersionApprovalEdge;
  createProjectVersionFileMultipartUpload: CreateMultipartUploadResponse;
  createSubmissionVersion: ProjectVersionEdge;
  createTag: TagEdge;
  createTopic: TopicEdge;
  createUseCaseVersion: ProjectVersionEdge;
  deleteBlogArticle: Scalars['ID']['output'];
  deleteComment: Scalars['ID']['output'];
  deleteCompetition: Scalars['ID']['output'];
  deleteEvent: Scalars['ID']['output'];
  deleteForum: Scalars['ID']['output'];
  deleteOrganization: Scalars['ID']['output'];
  deleteProjectVersionApproval: Scalars['ID']['output'];
  deleteTag: Scalars['ID']['output'];
  deleteTopic: Scalars['ID']['output'];
  deleteUser: Scalars['ID']['output'];
  fetchWebsiteMetadata: WebsiteMetadata;
  finishUploadFile: FinishUploadFile;
  generateEventInviteCode: EventInvite;
  initUploadFile: InitUploadFile;
  inviteEventMembers: Event;
  joinCompetition: CompetitionMembershipEdge;
  joinEvent: EventMembershipEdge;
  loginUser: UserEdge;
  logoutUser: Scalars['Boolean']['output'];
  oauth2Authorize: Oauth2AuthorizeOutput;
  oauth2Refresh: Oauth2TokenOutput;
  oauth2Token: Oauth2TokenOutput;
  publishVote: VotableEdge;
  removeCompetitionMember: Scalars['ID']['output'];
  removeEventCompetition: Scalars['ID']['output'];
  removeEventInviteCode: EventInvite;
  removeEventMember: Scalars['ID']['output'];
  removeOrganizationMember: Scalars['ID']['output'];
  resendEmailSignupVerification: EmailSignupRequest;
  resetPassword: Scalars['Boolean']['output'];
  resetVote: VotableEdge;
  sendEmailSignupVerification: EmailSignupRequest;
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
  updateBlogArticle: BlogArticleEdge;
  updateComment: CommentEdge;
  updateCompetition: CompetitionEdge;
  updateEvent: EventEdge;
  updateEventAgenda: EventEdge;
  updateForum: ForumEdge;
  updateOrganization: OrganizationEdge;
  updateOrganizationMembership: OrganizationMembershipEdge;
  updateTopic: Topic;
  updateUser: UserEdge;
  /**
   * Submit files for a "no-code" competition. This feature is not available for regular
   * competitions.
   */
  uploadNoCodeSubmissionVersion: ProjectVersionEdge;
  validateSubmissionVersion: ProjectVersionEdge;
  validateUseCaseVersion: ProjectVersionEdge;
  withdrawBadge: Scalars['ID']['output'];
};


export type MutationAcceptEventInviteArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
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


export type MutationAgreeToEventRuleArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  event: Scalars['ID']['input'];
};


export type MutationAwardBadgeArgs = {
  badge: Badge;
  entityId: Scalars['ID']['input'];
};


export type MutationCheckEmailSignupVerificationArgs = {
  input: EmailSignupVerficationInput;
};


export type MutationCompleteProjectVersionFileMultipartUploadArgs = {
  eTags: Array<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  uploadId: Scalars['String']['input'];
};


export type MutationCreateBlogArticleArgs = {
  input: CreateBlogArticleInput;
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


export type MutationCreateProjectVersionApprovalArgs = {
  projectVersionId: Scalars['ID']['input'];
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


export type MutationCreateTopicArgs = {
  forumId: Scalars['ID']['input'];
  input: CreateTopicInput;
};


export type MutationCreateUseCaseVersionArgs = {
  competitionId: Scalars['ID']['input'];
  input: UpdateUseCaseInput;
};


export type MutationDeleteBlogArticleArgs = {
  id: Scalars['ID']['input'];
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


export type MutationDeleteProjectVersionApprovalArgs = {
  projectVersionApprovalId: Scalars['ID']['input'];
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


export type MutationFetchWebsiteMetadataArgs = {
  url: Scalars['Url']['input'];
};


export type MutationFinishUploadFileArgs = {
  input: FinishUploadFileInput;
};


export type MutationGenerateEventInviteCodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInitUploadFileArgs = {
  input: InitUploadFileInput;
};


export type MutationInviteEventMembersArgs = {
  eventId: Scalars['ID']['input'];
  invites: Array<EventMemberInvite>;
};


export type MutationJoinCompetitionArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  competitionId: Scalars['ID']['input'];
};


export type MutationJoinEventArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  eventId: Scalars['ID']['input'];
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


export type MutationRemoveEventInviteCodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveEventMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrganizationMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResendEmailSignupVerificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResetVoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendEmailSignupVerificationArgs = {
  input: SendEmailSignupVerificationInput;
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


export type MutationUpdateBlogArticleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateBlogArticleInput;
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


export type MutationUploadNoCodeSubmissionVersionArgs = {
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
  competitionId: Scalars['ID']['input'];
  input: UploadNoCodeSubmissionInput;
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
  | 'CONTENT_MENTIONED'
  | 'CREATE_SUBMISSION'
  | 'CREATE_TOPIC'
  | 'PROMOTIONAL_NEWSLETTER'
  | 'REPLY_COMMENT'
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
  googleScholar: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  points: Scalars['Int']['output'];
  projectVersionApprovals: ProjectVersionApprovalConnection;
  rank: Scalars['Int']['output'];
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  userMembership: Maybe<OrganizationMembership>;
  username: Scalars['String']['output'];
  users: OrganizationUserConnection;
  viewerCan: Scalars['Boolean']['output'];
  website: Maybe<Scalars['String']['output']>;
};


export type OrganizationBadgesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationProjectVersionApprovalsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  projectVersionId: InputMaybe<Scalars['UUID']['input']>;
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

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of edges. */
  edges: Array<OrganizationEdge>;
  /** A list of nodes. */
  nodes: Array<Organization>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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

export type OrganizationUserConnection = {
  __typename?: 'OrganizationUserConnection';
  /** A list of edges. */
  edges: Array<OrganizationMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<OrganizationMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

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
  approval: Maybe<ProjectVersionApproval>;
  approvals: ProjectVersionApprovalConnection;
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
  status: ProjectVersionStatus;
  validatedAt: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Semver']['output'];
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionApprovalArgs = {
  entity: InputMaybe<Scalars['UsernameOrID']['input']>;
};


export type ProjectVersionApprovalsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectVersionFileByKindArgs = {
  kind: ProjectVersionFileKind;
};


export type ProjectVersionViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersionApproval = Node & {
  __typename?: 'ProjectVersionApproval';
  createdAt: Scalars['DateTime']['output'];
  entity: Entity;
  id: Scalars['ID']['output'];
  projectVersion: ProjectVersion;
  viewerCan: Scalars['Boolean']['output'];
};


export type ProjectVersionApprovalViewerCanArgs = {
  action: Action;
  asEntity: InputMaybe<Scalars['UsernameOrID']['input']>;
};

export type ProjectVersionApprovalConnection = {
  __typename?: 'ProjectVersionApprovalConnection';
  /** A list of edges. */
  edges: Array<ProjectVersionApprovalEdge>;
  /** A list of nodes. */
  nodes: Array<ProjectVersionApproval>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProjectVersionApprovalEdge = {
  __typename?: 'ProjectVersionApprovalEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: ProjectVersionApproval;
};

export type ProjectVersionCompressor =
  | 'GZIP'
  | 'ZSTANDARD'
  | '%future added value';

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
  points: Scalars['Int']['output'];
  projectVersion: ProjectVersion;
  rank: Maybe<Scalars['Int']['output']>;
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
  extension: Maybe<Scalars['String']['output']>;
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

export type ProjectVersionStatus =
  | 'AWAITING_APPROVAL'
  | 'AWAITING_EVALUATION'
  | 'AWAITING_VALIDATION'
  | 'ERROR'
  | 'OK'
  | '%future added value';

export type Query = {
  __typename?: 'Query';
  blogArticles: BlogArticleConnection;
  competitionBySlug: Maybe<Competition>;
  competitions: CompetitionConnection;
  entities: EntityConnection;
  entityByUsername: Maybe<Entity>;
  eventBySlug: Maybe<Event>;
  events: EventConnection;
  forumBySlug: Maybe<Forum>;
  forums: ForumConnection;
  leaderboard: GlobalLeaderboardConnection;
  node: Node;
  tags: TagConnection;
  version: Version;
  viewer: User;
};


export type QueryBlogArticlesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
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


export type QueryLeaderboardArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<EntityKind>>;
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

export type SendEmailSignupVerificationInput = {
  agreeToTermsAndPrivacyPolicy: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignupUserInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  emailSignup: EmailSignupVerficationInput;
  github: InputMaybe<Scalars['String']['input']>;
  googleScholar: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  subscribePromotionalNewsletter: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
  website: InputMaybe<Scalars['Url']['input']>;
};

export type SubjectKind =
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
  maxEvaluation: Maybe<ProjectVersionEvaluation>;
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
  projectVersionStatusUpdate: ProjectVersion;
  updatedComments: CommentEdge;
  updatedEntity: Entity;
};


export type SubscriptionDeletedCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionNewCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionProjectVersionStatusUpdateArgs = {
  competitionId: InputMaybe<Scalars['ID']['input']>;
  entityId: InputMaybe<Scalars['ID']['input']>;
  projectId: InputMaybe<Scalars['ID']['input']>;
  projectVersionId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUpdatedCommentsArgs = {
  topicId: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionUpdatedEntityArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
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
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  entitySubscription: Maybe<SubjectSubscription>;
  forum: Forum;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  url: Maybe<Scalars['String']['output']>;
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

export type UpdateBlogArticleInput = {
  authorsIds: InputMaybe<Array<Scalars['ID']['input']>>;
  content: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  seoDescription: InputMaybe<Scalars['String']['input']>;
  seoTitle: InputMaybe<Scalars['String']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
};

export type UpdateCompetitionInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  grantHostSubmissionAccess: InputMaybe<Scalars['Boolean']['input']>;
  hasLeaderboard: InputMaybe<Scalars['Boolean']['input']>;
  noCode: InputMaybe<Scalars['Boolean']['input']>;
  requiresApproval: InputMaybe<Scalars['Boolean']['input']>;
  rules: InputMaybe<Scalars['String']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  submissionPreamble: InputMaybe<Scalars['String']['input']>;
  tagIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<ActivityVisibility>;
};

export type UpdateEventInput = {
  banner: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  rules: InputMaybe<Scalars['String']['input']>;
  shortDescription: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  thumbnail: InputMaybe<Scalars['Upload']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  visibility: InputMaybe<ActivityVisibility>;
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
  googleScholar: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  inQuantumJob: InputMaybe<Scalars['Boolean']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['Url']['input']>;
};

export type UpdateSubmissionInput = {
  compression: InputMaybe<ProjectVersionCompressor>;
  pyprojectToml: Scalars['String']['input'];
  readme: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicInput = {
  description: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUseCaseInput = {
  compression: InputMaybe<ProjectVersionCompressor>;
  pyprojectToml: Scalars['String']['input'];
  readme: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio: InputMaybe<Scalars['String']['input']>;
  displayName: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  github: InputMaybe<Scalars['String']['input']>;
  googleScholar: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['Upload']['input']>;
  inQuantumJob: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle: InputMaybe<Scalars['String']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<Scalars['String']['input']>;
  oldPassword: InputMaybe<Scalars['String']['input']>;
  organization: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['Url']['input']>;
};

export type UploadNoCodeSubmissionInput = {
  files: Array<Scalars['Upload']['input']>;
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
  activities: ActivityConnection;
  badges: EntityBadgeConnection;
  bio: Maybe<Scalars['String']['output']>;
  /** can this user perform the action on the given resource */
  can: Scalars['Boolean']['output'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  entities: UserEntitiesConnection;
  github: Maybe<Scalars['String']['output']>;
  googleScholar: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['Url']['output']>;
  imageThumbnail: Maybe<Scalars['Url']['output']>;
  isAvailableOnQuantumJobs: Scalars['Boolean']['output'];
  jobBoardProfileLink: Maybe<Scalars['Url']['output']>;
  jobTitle: Maybe<Scalars['String']['output']>;
  karma: Scalars['Int']['output'];
  kind: EntityKind;
  linkedin: Maybe<Scalars['String']['output']>;
  location: Maybe<Scalars['String']['output']>;
  notifications: UserNotifications;
  organization: Maybe<Scalars['String']['output']>;
  organizations: UserOrganizationConnection;
  points: Scalars['Int']['output'];
  projectVersionApprovals: ProjectVersionApprovalConnection;
  rank: Scalars['Int']['output'];
  subjectSubscriptions: SubjectSubscriptionConnection;
  submissions: SubmissionConnection;
  topics: TopicConnection;
  username: Scalars['String']['output'];
  viewerCan: Scalars['Boolean']['output'];
  website: Maybe<Scalars['String']['output']>;
};


export type UserActivitiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  kinds: InputMaybe<Array<EntityActivitiesConnectionKind>>;
  last: InputMaybe<Scalars['Int']['input']>;
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


export type UserProjectVersionApprovalsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  projectVersionId: InputMaybe<Scalars['UUID']['input']>;
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

export type UserEntitiesConnection = {
  __typename?: 'UserEntitiesConnection';
  /** A list of edges. */
  edges: Array<EntityEdge>;
  /** A list of nodes. */
  nodes: Array<Entity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserNotifications = {
  __typename?: 'UserNotifications';
  disabled: Array<NotificationKind>;
  enabled: Array<NotificationKind>;
};

export type UserOrganizationConnection = {
  __typename?: 'UserOrganizationConnection';
  /** A list of edges. */
  edges: Array<OrganizationMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<OrganizationMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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

export type WebsiteMetadata = {
  __typename?: 'WebsiteMetadata';
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type Get_CompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_CompetitionsQuery = { __typename?: 'Query', competitions: { __typename?: 'CompetitionConnection', edges: Array<{ __typename?: 'CompetitionEdge', node: { __typename?: 'Competition', slug: string, title: string, shortDescription: string } }> } };

export type Oauth2_Token_MutationMutationVariables = Exact<{
  code: Scalars['String']['input'];
  clientId: Scalars['String']['input'];
  redirectUri: Scalars['Url']['input'];
}>;


export type Oauth2_Token_MutationMutation = { __typename?: 'Mutation', oauth2Token: { __typename?: 'Oauth2TokenOutput', clientError: boolean, unauthorized: boolean, issued: { __typename?: 'Oauth2Token', expiresIn: number, accessToken: string, refreshToken: string } | null } };

export type Competition_Entity_Submission_StatusSubscriptionVariables = Exact<{
  competitionId: Scalars['ID']['input'];
  entityId: Scalars['ID']['input'];
}>;


export type Competition_Entity_Submission_StatusSubscription = { __typename?: 'Subscription', projectVersionStatusUpdate: { __typename?: 'ProjectVersion', latest: boolean, status: ProjectVersionStatus, evaluation: { __typename?: 'ProjectVersionEvaluation', score: number | null, error: string | null, max: boolean } | null } };

export type UploadQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type UploadQuery = { __typename?: 'Query', viewer: { __typename?: 'User', id: string }, competitionBySlug: { __typename?: 'Competition', id: string } | null };

export type Refresh_TokenMutationVariables = Exact<{
  clientId: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
}>;


export type Refresh_TokenMutation = { __typename?: 'Mutation', oauth2Refresh: { __typename?: 'Oauth2TokenOutput', clientError: boolean, unauthorized: boolean, issued: { __typename?: 'Oauth2Token', expiresIn: number, accessToken: string, refreshToken: string } | null } };


export const Get_CompetitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMPETITIONS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"competitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_CompetitionsQuery, Get_CompetitionsQueryVariables>;
export const Oauth2_Token_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OAUTH2_TOKEN_MUTATION"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectUri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Url"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oauth2Token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"redirectUri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectUri"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientError"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorized"}},{"kind":"Field","name":{"kind":"Name","value":"issued"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<Oauth2_Token_MutationMutation, Oauth2_Token_MutationMutationVariables>;
export const Competition_Entity_Submission_StatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"COMPETITION_ENTITY_SUBMISSION_STATUS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"competitionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectVersionStatusUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"competitionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"competitionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latest"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"evaluation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]} as unknown as DocumentNode<Competition_Entity_Submission_StatusSubscription, Competition_Entity_Submission_StatusSubscriptionVariables>;
export const UploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UPLOAD"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"competitionBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UploadQuery, UploadQueryVariables>;
export const Refresh_TokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REFRESH_TOKEN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oauth2Refresh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientError"}},{"kind":"Field","name":{"kind":"Name","value":"unauthorized"}},{"kind":"Field","name":{"kind":"Name","value":"issued"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<Refresh_TokenMutation, Refresh_TokenMutationVariables>;