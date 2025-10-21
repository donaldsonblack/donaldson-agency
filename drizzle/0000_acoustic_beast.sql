CREATE TABLE `contacts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`subscribed_at` integer DEFAULT (unixepoch())
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);