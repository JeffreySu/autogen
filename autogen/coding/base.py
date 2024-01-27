from typing import List, Protocol

from pydantic import BaseModel


class CodeBlock(BaseModel):
    """A class that represents a code block."""

    """The code to execute."""
    code: str

    """The language of the code."""
    language: str


class CodeResult(BaseModel):
    """A class that represents the result of a code execution."""

    """The exit code of the code execution."""
    exit_code: int

    """The output of the code execution."""
    output: str


class CodeExtractor(Protocol):
    """A code extractor class that extracts code blocks from a message."""

    def extract_code_blocks(self, message: str) -> List[CodeBlock]:
        """Extract code blocks from a message.

        Args:
            message (str): The message to extract code blocks from.

        Returns:
            List[CodeBlock]: The extracted code blocks.
        """
        ...  # pragma: no cover


class CodeExecutor(Protocol):
    """A code executor class that executes code blocks and returns the result."""

    class UserCapability(Protocol):
        """An AgentCapability class that gives agent ability use this code executor."""

        def add_to_agent(self, agent):
            ...  # pragma: no cover

    @property
    def user_capability(self) -> "CodeExecutor.UserCapability":
        """Capability to use this code executor.

        The exported capability can be added to an agent to allow it to use this
        code executor:

        ```python
        code_executor = CodeExecutor()
        agent = Agent()
        code_executor.user_capability.add_to_agent(agent)
        ```

        A typical implementation is to update the system message of the agent with
        instructions for how to use this code executor.
        """
        ...  # pragma: no cover

    @property
    def code_extractor(self) -> CodeExtractor:
        """The code extractor used by this code executor."""
        ...  # pragma: no cover

    def execute_code_blocks(self, code_blocks: List[CodeBlock]) -> CodeResult:
        """Execute code blocks and return the result.

        This method should be implemented by the code executor.

        Args:
            code_blocks (List[CodeBlock]): The code blocks to execute.

        Returns:
            CodeResult: The result of the code execution.
        """
        ...  # pragma: no cover

    def restart(self) -> None:
        """Restart the code executor.

        This method should be implemented by the code executor.

        This method is called when the agent is reset.
        """
        ...  # pragma: no cover