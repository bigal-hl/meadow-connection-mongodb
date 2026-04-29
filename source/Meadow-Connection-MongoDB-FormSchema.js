/**
 * Connection form schema for MongoDB.
 *
 * Consumed by meadow-connection-manager#getProviderFormSchema('MongoDB').
 * Pure data — safe to require() even when the mongodb driver is not
 * installed.  See Meadow-Connection-MySQL-FormSchema.js for the field
 * contract.
 */
'use strict';

module.exports =
{
	Provider:    'MongoDB',
	DisplayName: 'MongoDB',
	Description: 'Connect to a MongoDB server.',
	Fields:
	[
		{ Name: 'host',        Label: 'Host',          Type: 'String',   Default: '127.0.0.1', Required: true, Placeholder: '127.0.0.1' },
		{ Name: 'port',        Label: 'Port',          Type: 'Number',   Default: 27017,       Required: true, Min: 1, Max: 65535 },
		{ Name: 'user',        Label: 'User',          Type: 'String',   Placeholder: '(optional)' },
		{ Name: 'password',    Label: 'Password',      Type: 'Password', Placeholder: '(optional)' },
		{ Name: 'database',    Label: 'Database',      Type: 'String',   Default: 'test', Placeholder: 'test' },
		{ Name: 'maxPoolSize', Label: 'Max Pool Size', Type: 'Number',   Default: 10, Min: 1, Group: 'Advanced' }
	]
};
