'use client';

import { useEffect, useState, type FormEvent } from 'react';

const storageKey = 'eurocareer.applications';
const statuses = ['Saved', 'Applied', 'Interviewing', 'Offer', 'Closed'] as const;
type Status = (typeof statuses)[number];
type Application = { id: string; role: string; employer: string; status: Status };

function isApplication(value: unknown): value is Application {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Partial<Application>;
  return typeof item.id === 'string' &&
    typeof item.role === 'string' &&
    typeof item.employer === 'string' &&
    statuses.some((status) => status === item.status);
}

export default function ApplicationTracker() {
  const [applications, setApplications] = useState<Application[] | null>(null);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
      setApplications(Array.isArray(saved) ? saved.filter(isApplication) : []);
    } catch {
      setApplications([]);
      setStorageError(true);
    }
  }, []);

  function save(next: Application[]) {
    setApplications(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }

  function addApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!applications) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const role = String(fields.get('role') ?? '').trim();
    const employer = String(fields.get('employer') ?? '').trim();
    if (!role || !employer) return;

    save([{ id: crypto.randomUUID(), role, employer, status: 'Saved' }, ...applications]);
    form.reset();
  }

  return (
    <>
      <p>Save roles and update their status as you apply. Your applications are stored in this browser.</p>
      {storageError && <p role="alert">Browser storage could not be read or written. Changes may disappear when you leave this page.</p>}
      <form onSubmit={addApplication}>
        <fieldset disabled={applications === null}>
          <legend>Add an application</legend>
          <label htmlFor="role">Job title</label>{' '}
          <input id="role" name="role" required pattern={String.raw`.*\S.*`} maxLength={120} />{' '}
          <label htmlFor="employer">Employer</label>{' '}
          <input id="employer" name="employer" required pattern={String.raw`.*\S.*`} maxLength={120} />{' '}
          <button type="submit">Add application</button>
        </fieldset>
      </form>

      <h2>Saved applications</h2>
      {applications === null && <p role="status">Loading applications…</p>}
      {applications?.length === 0 && <p>No applications saved yet.</p>}
      {!!applications?.length && (
        <ul>
          {applications.map((application) => (
            <li key={application.id}>
              <strong>{application.role}</strong> at {application.employer}{' '}
              <label>
                Status for {application.role} at {application.employer}{' '}
                <select
                  value={application.status}
                  onChange={(event) => {
                    const status = statuses.find((option) => option === event.currentTarget.value);
                    if (!status) return;
                    save(applications.map((item) => item.id === application.id ? { ...item, status } : item));
                  }}
                >
                  {statuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </label>{' '}
              <button
                type="button"
                aria-label={`Remove ${application.role} at ${application.employer}`}
                onClick={() => save(applications.filter((item) => item.id !== application.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
