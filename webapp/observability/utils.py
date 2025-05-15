import functools
from opentelemetry import trace

tracer = trace.get_tracer(__name__)


def trace_function(fn):
    """Decorator to trace function calls."""

    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        with tracer.start_as_current_span(fn.__name__):
            return fn(*args, **kwargs)

    return wrapper


def start_span(span_name):
    return tracer.start_as_current_span(span_name)
