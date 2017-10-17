package nl.youngcapital.LabJournal;

import static org.junit.Assert.*;

import org.junit.Test;

public class labjournaltest {

	@Test
	public void projectsettertest() {
		Project project = new Project();
		project.setId(50L);
		Long testid = 50L;
		assertEquals(project.getId(), testid);
	}

}
