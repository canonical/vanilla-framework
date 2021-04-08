import {warn, danger} from 'danger';

// Ensure that a label has been set
if (danger.github.issue.labels.length === 0) {
  warn('This PR does not have any labels.');
}
